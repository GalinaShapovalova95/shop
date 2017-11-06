'use strict';

const productImage = document.getElementById('mainPhoto');
const dataOfClothes = document.querySelector('.product-props');

dataOfClothes.addEventListener('click', function (event) {
    const color = event.target.dataset.color;
    if (color !== undefined) {
        productImage.src = `img/tshirt_${color}.jpg`;
    }
});
