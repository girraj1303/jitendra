
// dark light theme
// const bodyDiv = document.getElementById('body');
// const addThemeBtn = document.getElementById('add-btn');
// const removeThemeBtn = document.getElementById('remove-btn');

// addThemeBtn.addEventListener('click', () => {
//     bodyDiv.classList.add('change_theme');
// });

// removeThemeBtn.addEventListener('click', () => {
//     bodyDiv.classList.remove('change_theme');
// });

// toggle menu button 
const header = document.getElementById('header');
const toggleMenuBtn = document.getElementById('toggle_menu');
const removeMenuBtn = document.getElementById('remove_menu');

toggleMenuBtn.addEventListener('click', () => {
    header.classList.add('header_menu');
});

removeMenuBtn.addEventListener('click', () => {
    header.classList.remove('header_menu');
});

// header menu active class
var selector = '.menu li a';

$(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
  
