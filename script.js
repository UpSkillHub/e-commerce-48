

const humberger = document.querySelector(".open")
const close = document.querySelector(".close")

const navs = document.querySelector(".collapse")

const preview=document.querySelector("product-1");
const imageOne=document.getElementById("thumb-1");
const imageTwo=document.getElementById("thumb-2");
const imageThree=document.getElementById("thumb-3");
const imageFour=document.getElementById("thumb-4");

humberger.addEventListener("click", function () {
    close.style = "display: flex"
    humberger.style = "display: none"
    navs.style = "display: flex"
})
close.addEventListener("click", function () {
    humberger.style = "display: flex"
    close.style = "display: none"
    navs.style = "display: none"
    navs.removeAttribute('style')
}) 

imageTwo.addEventListener("click", function () {
const prevImg=document.querySelector('.product-img');

prevImg.src="./images/product-2.jpg";
});

imageThree.addEventListener("click", function () {
const prevY=document.querySelector('.product-img');

prevY.src="./images/product-3.jpg";
});

imageFour.addEventListener("click", function () {
const prevZ=document.querySelector('.product-img');

prevZ.src="./images/product-4.jpg";
});
