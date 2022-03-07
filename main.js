
console.log('js ok');



// hamburger menu opening
const hamburgerButton = document.querySelector('.header-right > a');

hamburgerButton.addEventListener('click', function () {

    document.querySelector('.hamburger-menu').style.display = 'block';

});

// close Button
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', function () {
    document.querySelector('.hamburger-menu').style.display = 'none';
});



