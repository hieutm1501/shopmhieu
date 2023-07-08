const cartList = document.getElementById('cart-list');
const billList = document.getElementById('sum-bill');
const bookingList = document.getElementById('booking');
let cart = [];

fetch('https://64a7eb38dca581464b84ff57.mockapi.io/cart')
    .then(response => response.json())
    .then(data => {
        cart = data;
        displayProducts(cart);
        calculateTotal(cart);
    });

function displayProducts(cart) {
    cartList.innerHTML = '';
    for (let item of cart) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div>
                            <img src="${item.img}"
                                class="img-fluid rounded-3" alt="Shopping item"
                                style="width: 65px;">
                        </div>
                        <div class="ms-3">
                            <h5>${item.name}</h5>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                            <h5 class="fw-normal mb-0">${item.quantity}</h5>
                        </div>
                        <div style="width: 80px;">
                            <h5 class="mb-0">$${item.price}</h5>
                        </div>
                        <button style="color: #cecece;" data-id="${item.id}" class="btn-xoa"><i
                        class="fas fa-trash-alt"></i>
                        </button>
                        
                    </div>
                </div>
            </div>
        `;
        cartList.appendChild(cartItem);
    }
    // Add event listener to all "Xóa" buttons
    const btnXoaList = document.querySelectorAll('.btn-xoa');
    for (let i = 0; i < btnXoaList.length; i++) {
        btnXoaList[i].addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const confirmed = confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?');
            if (confirmed) {
                // Find index of the item to remove
                const index = cart.findIndex(item => item.id === id);
                if (index !== -1) {
                    // Remove the item from the cart
                    cart.splice(index, 1);
                    // Update the display
                    displayProducts(cart);
                    calculateTotal(cart);
                    // Update the cart on the server
                    fetch(`https://64a7eb38dca581464b84ff57.mockapi.io/cart/${id}`, {
                        method: 'DELETE',
                    })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error(error));
                }
            }
        });
    }
}

// ------------Chức Năng Thanh Toán---------//

const formpay = document.getElementById('form-pay')
const payName = document.getElementById('payName')
const payNumber = document.getElementById('payNumber')
const payTime = document.getElementById('payTime')
const payCvv = document.getElementById('payCvv')

formpay.addEventListener('submit', (e) => {
    e.preventDefault()
    if (payName.value == '' || payNumber.value == '' || payTime.value == '' || payCvv.value == '') {
        alert("Vui Lòng Nhập Đầy đủ thông tin")
        return
    }
    alert("Đang xử lí thanh toán")
})

function calculateTotal(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.price * item.quantity;
    }
    console.log(`Total price: $${total + 20}`);
    billList.innerHTML = '';
    const billItem = document.createElement('div');
    billItem.classList.add('bill-item');
    billItem.innerHTML = `
    <p >$${total}</p>
`;
    billList.appendChild(billItem);
    // booking list
    bookingList.innerHTML = '';
    const bookingItem = document.createElement('div');
    bookingItem.classList.add('bill-item');
    bookingItem.innerHTML = `
    <p>$${total + 20}</p>
`;
    bookingList.appendChild(bookingItem);
}