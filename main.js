
console.log('js ok');


// hamburger menu opening

document.querySelector('.header-right > a').addEventListener('click', function () {
    document.querySelector('.hamburger-menu').style.display = 'block';

});


// close Button
document.querySelector('.close').addEventListener('click', function () {

    document.querySelector('.hamburger-menu').style.display = 'none';

});



