'use strict';

const colorOfClothes = document.getElementById('main-photo');
const dataOfClothes = document.querySelector('.props-product');

dataOfClothes.addEventListener('click', function (event) {
    if(event.target.dataset.color === 'white'){
        colorOfClothes.src='img/tshirt_white.jpg';
    } else if(event.target.dataset.color === 'yellow'){
        colorOfClothes.src='img/tshirt_yellow.jpg';
    } else if(event.target.dataset.color === 'green'){
        colorOfClothes.src='img/tshirt_green.jpg';
    }
});

// function sendData(event) {
//     const data = document.getElementById("input1").value;
//     alert(data);
// }

// const sizeS = document.getElementById('size-s');
// const sizeM = document.getElementById('size-m');
// const sizeL = document.getElementById('size-l');
//
// sizeS.onclick = function () {
//     sizeS.classList.remove('props-product__item_active');
//     sizeM.classList.remove('props-product__item_active');
//     sizeL.classList.remove('props-product__item_active');
//
//     sizeS.classList.add('props-product__item_active');
// };
//
// sizeM.onclick = function () {
//     sizeS.classList.remove('props-product__item_active');
//     sizeM.classList.remove('props-product__item_active');
//     sizeL.classList.remove('props-product__item_active');
//
//     sizeM.classList.add('props-product__item_active');
// };
//
// sizeL.onclick = function () {
//     sizeS.classList.remove('props-product__item_active');
//     sizeM.classList.remove('props-product__item_active');
//     sizeL.classList.remove('props-product__item_active');
//
//     sizeL.classList.add('props-product__item_active');
// };
//
//
// const whiteColor = document.getElementById('col-1');
// const yellowColor = document.getElementById('col-2');
// const greenColor = document.getElementById('col-3');
//
// whiteColor.onclick = function () {
//     document.getElementById('main-photo').src='img/tshirt_white.jpg';
//     whiteColor.classList.remove('props-product__item_active');
//     yellowColor.classList.remove('props-product__item_active');
//     greenColor.classList.remove('props-product__item_active');
//
//     whiteColor.classList.add('props-product__item_active');
// };
//
// yellowColor.onclick = function (){
//     document.getElementById('main-photo').src='img/tshirt_yellow.jpg';
//     whiteColor.classList.remove('props-product__item_active');
//     yellowColor.classList.remove('props-product__item_active');
//     greenColor.classList.remove('props-product__item_active');
//
//     yellowColor.classList.add('props-product__item_active');
// };
// greenColor.onclick = function(){
//     document.getElementById('main-photo').src='img/tshirt_green.jpg';
//     whiteColor.classList.remove('props-product__item_active');
//     yellowColor.classList.remove('props-product__item_active');
//     greenColor.classList.remove('props-product__item_active');
//
//     greenColor.classList.add('props-product__item_active');
// };
