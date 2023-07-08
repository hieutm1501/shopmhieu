window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

    document.getElementById("nav").style.backgroundColor = "#fff";
    document.getElementById("nav").style.top = "0"
    document.getElementById("nav").style.padding = "0px 0px 0px 0px"
    document.getElementById("nav").style.boxShadow = "0px 2px 10px gray"
  } else {

    document.getElementById("nav").style.top = "40px"
    document.getElementById("nav").style.padding = "10px 0px 15px 0px"
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


//----------------Validate cart----------------//
const option = document.getElementById('option');
const state = document.getElementById('state');
const postcode = document.getElementById('postcode');
const flag = true;
function validateCart() {


  if (option.value == "0" && state.value=="" && postcode.value =="") {
    alert("Please enter your address");
    option.style.border="1px solid red";
    state.style.border="1px solid red";
    postcode.style.border="1px solid red";
   
    flag = false;
  }
  else {
      if(option.value=="0"){
        alert("please choese your option");
        option.style.border="1px solid red";
        flag=false;
      }else{
        flag=true;
        option.style.border="none"
      }
      
      if(state.value=""){
        alert("please enter your State");
        state.style.border="1px solid red";
        flag= false;
      }
      else{
        state.style.border="none";
        flag= true;
      }
      if(postcode.value==""){
        alert('please enter your postcode');
        flag= flase;
        postcode.style.border="1px solid red";
      }else{
      flag=true;
      postcode.style.border="none"
      }

  }
  if (option.value == "0" && state.value=="" && postcode.value =="") {
    alert('Total number of successful updates');
    flag=true;
  }
  return flag;
}
