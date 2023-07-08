// "use strict";

// // const $ = document.querySelector.bind(document);
// // const $$ = document.querySelectorAll.bind(document);

// // scroll header
// const nav_Conten =document.querySelector('.nav');
// const none_top=document.querySelector('.header-top');
// (()=>{
//   window.onscroll=()=>{
//     var dk = document.body.scrollTop > 5 || document.documentElement.scrollTop > 5;
//     nav_Conten.classList[dk ? 'add' : 'remove']('active_Nav_concess');
//     none_top.classList[dk ? 'add' : 'remove']('ds_none');
//   }
// })();


//---------------scroll Menu--------------//

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

    document.getElementById("nav").style.backgroundColor = "#fff";
    document.getElementById("nav").style.top = "0"
    document.getElementById("nav").style.padding = "16px 0px 0px 0px"
    document.getElementById("nav").style.boxShadow = "0px 2px 10px gray"
  } else {

    document.getElementById("nav").style.top = "40px"
    document.getElementById("nav").style.padding = "16px 0px 16px 0px"
    document.getElementById("nav").style.boxShadow = "0px 2px 10px gray"

  }
}

//----------------dark mode----------------//

const app = document.querySelector("#app");
const toggggle = document.querySelector(".toggle");
toggggle.addEventListener("click", () => {
  app.classList.toggle("dark")
    // đổi icon snag ban đêm
    ? (toggggle.firstElementChild.className = "far fa-moon") : (toggggle.firstElementChild.className = "bx bx-sun")
})

//----------------heart----------------//
document.getElementById('bxs').style.color = "black";
function addHeart() {
  var heart = document.getElementById('bxs');
  
  if (heart.style.color == "black") {
    heart.style.color = "#6775d6"
    alert('Added to favorites')
  } else {
    heart.style.color = "black"
    alert("Removed to favorites")
  }
}
//----------------Product---------//


// cài dặt mặc định
document.getElementById('appp').style.display = "none"
function showProduct() {
  var x = document.getElementById('appp');
  if (x.style.display == "block") {
    x.style.display = "none"
    x.style.transition=".6s";
    x.style.transform(screenX)="0"
  } else {
    x.style.display = "block"
    x.style.zIndex="100"
    x.style.transform(screenX)="100%"
  }
}

