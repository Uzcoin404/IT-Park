const menu = document.querySelector('.menu_btn');
const nav = document.querySelector('.nav_list');
menu.addEventListener('click', function(){
    nav.classList.toggle('active');
    menu.classList.toggle('active');
});
