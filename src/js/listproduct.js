// Get elements
const productList = document.getElementById('product-list');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const productDetail = document.getElementById('product-detail');
const closeBtn = document.getElementsByClassName('close')[0];
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let product = [];

fetch('https://64a7eb38dca581464b84ff57.mockapi.io/product')
  .then(response => response.json())
  .then(data => {
    product = data;
    displayProducts(product);
  });

function displayProducts(product) {
  productList.innerHTML = '';
  for (let item of product) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <form>
          <div class="item-image-product">
            <div class="test"><img src="${item.img}" width="100%" alt=""></div>
            <p><a href="#" class="quick-view">Quick View</a></p>
            <div class="name-item-image-product">
              <div class="price-name-item-image-product">
                <p>${item.name}</p>
                <p>$${item.price}</p>
              </div>
              <div class="heart-name-item-image-product">
                <i id="bxs" onclick="addHeart()" class='bx bxs-heart'></i>
              </div>
            </div>
          </div>
        </form>
      `;
    productList.appendChild(productItem);

    const quickViewLink = productItem.querySelector('.quick-view');
    quickViewLink.addEventListener('click', function (event) {
      event.preventDefault();
      showProductDetail(item);
    });
  }
}
// lắng nghe sự kiện click
searchInput.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    const searchTerm = searchInput.value.trim().toLowerCase();
    // Lọc danh sách sản phẩm theo từ khóa tìm kiếm và hiển thị danh sách sản phẩm lọc được lên trang web.
    const filteredProducts = product.filter(product => {
      return product.name.toLowerCase().includes(searchTerm) || product.price.toLowerCase().includes(searchTerm);
    });

    displayProducts(filteredProducts);
  }
});

// hàm sắp xếp danh sách sản phẩm từA đến Z
function sortProductsAz() {
  product.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // đổi tên sản phẩm thành chữ in hoa
    var nameB = b.name.toUpperCase(); // đổi tên sản phẩm thành chữ in hoa
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  displayProducts(product);
}

// hàm sắp xếp danh sách sản phẩm từ Z đến A
function sortProductsZa() {
  product.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // đổi tên sản phẩm thành chữ in hoa
    var nameB = b.name.toUpperCase(); // đổi tên sản phẩm thành chữ in hoa
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });
  displayProducts(product);
}

// lấy các phần tử DOM tương ứng với hai nút click
var sortAzButton = document.querySelector('#sort-az');
var sortZaButton = document.querySelector('#sort-za');

// thêm sự kiện click cho hai nút
sortAzButton.addEventListener('click', function () {
  sortProductsAz();
});

sortZaButton.addEventListener('click', function () {
  sortProductsZa();
});

function showProductDetail(item) {
  // Set product detail content
  productDetail.innerHTML = `
  

  <div class="grid">
    <div class="grid-left">
      <img src="${item.img}" width="80%" alt="">
      <img src="${item.img}" width="80%" alt="">
      <img src="${item.img}" width="80%" alt="">
    </div>
    <div class="grid-mid">


      <div class="img">
        <img id="img" src="${item.img}" width="100%" alt="">
        
      </div>


      <div class="icon-next-pre">

        <i class='bx bx-exit-fullscreen'></i>

        <div class="next-pre">
          <i class='bx bx-chevron-left' onclick="pre()"></i>
          <i class='bx bx-chevron-right' onclick="next()"></i>
        </div>

      </div>



    </div>

    <div class="grid-right">
      <p>${item.name}</p>
      
      <h4>$${item.price}</h4>
      
      <p>Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligu
        la. Mauris consequat ornare feugiat.</p>


      <div class="option-product">
        <form id="form_detail">
        <input hidden id="imgcart" value="${item.img}" type="text">
        <input hidden id="namecart" value="${item.name}" type="text">
        <input hidden id="pricecart" value="${item.price}" type="text">
          <table>
            <tr>
              <td>
                Size
              </td>
              <td>
                <select id="size">
                  <option value="0">Choose an option</option>
                  <option value="1">Size S</option>
                  <option value="2">Size M</option>
                  <option value="3">Size L</option>
                  <option value="4">Size XL</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Color</td>
              <td>
                <select id="color">
                  <option value="0">Choose an option</option>
                  <option value="1">Red</option>
                  <option value="2">Blue</option>
                  <option value="3">White</option>
                  <option value="4">Gray</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button>-</button>
                <input type="number" id="quantity" value="1" min="1">
                <button>+</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" name="" value="ADD TO CART" id="a">
              </td>
            </tr>
          </table>
        </form>
      </div>



      <div class="icon-product">
        <i class='bx bxs-heart'></i>
        <i class='bx bxl-facebook-circle'></i>
        <i class='bx bxl-twitter'></i>
        <i class='bx bxl-google-plus'></i>
      </div>
      
    </div>
  </div>

  
        `;

  // Show modal overlay and product detail
  modalOverlay.style.display = 'block';
  modalContent.style.display = 'block';

  // Close modal when clicking close button or outside modal content
  closeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    modalOverlay.style.display = 'none';
    modalContent.style.display = 'none';
  });

  modalOverlay.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = 'none';
      modalContent.style.display = 'none';
    }
  });
  const formDetail = document.getElementById('form_detail')
  const namecart = document.getElementById('namecart')
  const imgcart = document.getElementById('imgcart')
  const pricecart = document.getElementById('pricecart')
  const size = document.getElementById('size');
  const color = document.getElementById('color');
  const quantity = document.getElementById('quantity')

  formDetail.addEventListener('submit', (e) => {
    e.preventDefault();
    if (size.value == "0") {
      alert('Bạn chưa chọn size !')
      return
    }
    if (color.value == "0") {
      alert('Bạn Chưa chọn color !')
      return
    }
    const data = {
      name: namecart.value,
      img: imgcart.value,
      price: pricecart.value,
      quantity: quantity.value
    };

    fetch('https://64a7eb38dca581464b84ff57.mockapi.io/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    alert('Thêm Giỏ Hàng Thành công');
    window.location.href = './features.html';
  })

}


