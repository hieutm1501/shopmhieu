//---------------scroll Menu--------------//

window.onscroll = function () { scrollFunction() };
document.getElementById("nav").style.backgroundColor = "#fff";
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {


    document.getElementById("nav").style.top = "0"
    document.getElementById("nav").style.padding = "16px 0px 0px 0px"
    document.getElementById("nav").style.boxShadow = "0px 2px 10px gray"
  } else {

    document.getElementById("nav").style.top = "40px"
    document.getElementById("nav").style.padding = "5px 0px 10px 0px"
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