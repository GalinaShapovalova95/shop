'use strict';

const productImage = document.getElementById('mainPhoto');
const dataOfClothes = document.querySelector('.product-props');

dataOfClothes.addEventListener('click', function (event) {
    //const color = event.target.getAttribute('data-color');
    const color = event.target.dataset.color;
    productImage.src =`img/tshirt_${color}.jpg`;
});
