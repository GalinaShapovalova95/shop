'use strict';

const sizeS = document.getElementById('size1');
const sizeM = document.getElementById('size2');
const sizeL = document.getElementById('size3');

sizeS.onclick = function () {
    sizeS.classList.remove('props-product__item_active');
    sizeM.classList.remove('props-product__item_active');
    sizeL.classList.remove('props-product__item_active');

    sizeS.classList.add('props-product__item_active');
};

sizeM.onclick = function () {
    sizeS.classList.remove('props-product__item_active');
    sizeM.classList.remove('props-product__item_active');
    sizeL.classList.remove('props-product__item_active');

    sizeM.classList.add('props-product__item_active');
};

sizeL.onclick = function () {
    sizeS.classList.remove('props-product__item_active');
    sizeM.classList.remove('props-product__item_active');
    sizeL.classList.remove('props-product__item_active');

    sizeL.classList.add('props-product__item_active');
};


const whiteColor = document.getElementById('col1');
const yellowColor = document.getElementById('col2');
const greenColor = document.getElementById('col3');

whiteColor.onclick = function () {
    document.getElementById('main-photo').src='img/tshirt_white.jpg';
    whiteColor.classList.remove('props-product__item_active');
    yellowColor.classList.remove('props-product__item_active');
    greenColor.classList.remove('props-product__item_active');

    whiteColor.classList.add('props-product__item_active');
};

yellowColor.onclick = function (){
    document.getElementById('main-photo').src='img/tshirt_yellow.jpg';
    whiteColor.classList.remove('props-product__item_active');
    yellowColor.classList.remove('props-product__item_active');
    greenColor.classList.remove('props-product__item_active');

    yellowColor.classList.add('props-product__item_active');
};
greenColor.onclick = function(){
    document.getElementById('main-photo').src='img/tshirt_green.jpg';
    whiteColor.classList.remove('props-product__item_active');
    yellowColor.classList.remove('props-product__item_active');
    greenColor.classList.remove('props-product__item_active');

    greenColor.classList.add('props-product__item_active');
};
