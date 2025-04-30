

const humberger = document.querySelector(".open");
const close = document.querySelector(".close");
const navs = document.querySelector(".nav-container");
const preview=document.querySelector("product-1");
const imageOne=document.getElementById("thumb-1");
const imageTwo=document.getElementById("thumb-2");
const imageThree=document.getElementById("thumb-3");
const imageFour=document.getElementById("thumb-4"); 
const plus = document.getElementById("plusbtn"); 
const minus = document.getElementById("minusbtn"); 
const qtnElement = document.getElementById("qtn"); 
const addCart=document.getElementById("add-cart");
const cartClick=document.getElementById("cart-top");
const cartDisplay=document.getElementById("cart");
const  report=document.getElementById("report");

const prevImg=document.querySelector('.product-img');
// const cart=document.g


humberger.addEventListener("click", function () {
    close.style = "display: flex";
    humberger.style = "display: none";
    navs.style = "display: flex";
})
close.addEventListener("click", function () {
    humberger.style = "display: flex";
    close.style = "display: none";
    navs.style = "display: none";
    navs.removeAttribute('style');
}) 

imageOne.addEventListener("click", function () {
// const prevImg=document.querySelector('.product-img');

prevImg.src="./images/product-1.jpg";
});


imageTwo.addEventListener("click", function () {
// const prevImg=document.querySelector('.product1');

prevImg.src="./images/product-2.jpg";
});

imageThree.addEventListener("click", function () {
// const prevImg=document.querySelector('.product-img');

prevImg.src="./images/product-3.jpg";
});

imageFour.addEventListener("click", function () {
// const prevImg=document.querySelector('.product-img');

prevImg.src="./images/product-4.jpg";
});


minus.addEventListener("click", function () {
    let qtn = parseInt(qtnElement.textContent); 
    if (qtn > 1) { 
        qtn--;
        qtnElement.textContent = qtn; 
      
    }
});


plus.addEventListener("click", function () {
    let qtn = parseInt(qtnElement.textContent); 
    qtn++;
    qtnElement.textContent = qtn; 
});

addCart.addEventListener("click", function () {
    let cart=document.getElementById("cart-qtn");
    cart.textContent=qtnElement.textContent;

    let img=document.querySelector(".cart-img");
    
});

// addCart.addEventListener("click", function () {
//     let cart=document.getElementById("cart-qtn");
//     cart.textContent=qtnElement.textContent;
// });



cartDisplay.addEventListener("click", function (e){
    if(e.target.classList.contains('Pro')) {
        e.target.classList.remove("Pro")
        report.style="display:none";
    } else {
        report.style="display:flex";
        e.target.classList.add("Pro");
        let cartNumber=document.getElementById("cart-qtn");
        let empty=document.getElementById("cart-cont");
        let checkOut=document.getElementById("check-out");
      if(cartNumber.textContent==0){
            empty.style="display:flex";
            checkOut.style="display:none";
      } else {
            checkOut.style="display:flex";
            empty.style="display:none";
      }
    }
})

// cartDisplay.addEventListener("dblclick", function (){

// report.style="display:none";

// } 


// )