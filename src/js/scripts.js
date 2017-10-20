'use strict';

function changeSize(id) {
    document.getElementById('size1').classList.remove('props-product__item_active');
    document.getElementById('size2').classList.remove('props-product__item_active');
    document.getElementById('size3').classList.remove('props-product__item_active');

    document.getElementById(`${id}`).classList.add('props-product__item_active');
}

const whiteColor = document.getElementById('col1');
const yellowColor = document.getElementById('col2');
const greenColor = document.getElementById('col3');

whiteColor.onclick = function () {
    document.getElementById('main-photo').src='img/tshirt_white.jpg';
    document.getElementById('col2').classList.remove('props-product__item_active');
    document.getElementById('col3').classList.remove('props-product__item_active');

    document.getElementById('col1').classList.add('props-product__item_active');
};

yellowColor.onclick = function (){
    document.getElementById('main-photo').src='img/tshirt_yellow.jpg';
    document.getElementById('col1').classList.remove('props-product__item_active');
    document.getElementById('col3').classList.remove('props-product__item_active');

    document.getElementById('col2').classList.add('props-product__item_active');
};
greenColor.onclick = function(){
    document.getElementById('main-photo').src='img/tshirt_green.jpg';
    document.getElementById('col1').classList.remove('props-product__item_active');
    document.getElementById('col2').classList.remove('props-product__item_active');

    document.getElementById('col3').classList.add('props-product__item_active');
};
