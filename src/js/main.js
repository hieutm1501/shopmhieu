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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

    document.getElementById("nav").style.backgroundColor="#fff";
    document.getElementById("nav").style.top="0"
    document.getElementById("nav").style.padding="10px 0px 5px 0px"   
    document.getElementById("nav").style.boxShadow="0px 2px 10px gray"

  } else {
    
    document.getElementById("nav").style.background="transparent"
    document.getElementById("nav").style.top="50px"
    document.getElementById("nav").style.padding="16px 0px 26px 0px"
    document.getElementById("nav").style.boxShadow="none"
  }
}

//----------------dark mode----------------//

const app = document.querySelector("#app");
const toggggle = document.querySelector(".toggle");
toggggle.addEventListener("click",()=>{
  app.classList.toggle("dark")
  // đổi icon snag ban đêm
  ?(toggggle.firstElementChild.className="far fa-moon"):(toggggle.firstElementChild.className="bx bx-sun")
})

//----------------heart----------------//
function addHeart(){
  alert(" đã thêm vào danh mục yêu thích");
};
// const Heart = document.querySelector(".heart-name-item-image-product");
// const toggle =document.querySelector("#bx");
// toggle.addEventListener('click',function(){
//   Heart.classList.toggle("bxxx")
 
// })

