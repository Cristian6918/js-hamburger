
console.log('js ok');


const hamburgerMenu = document.querySelector('.hamburger-menu');

// hamburger menu opening
const hamburgerButton = document.querySelector('.header-right > a');

hamburgerButton.addEventListener('click', function () {

    hamburgerMenu.style.display = 'block';

});

// close Button
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function () {
    hamburgerMenu.style.display = 'none';
});



