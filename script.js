const menu_btn = document.querySelector('#menu-btn');
const menu_bar = document.querySelector('.nav-bar');


menu_btn.addEventListener('click', showMenu);

function showMenu(){
    menu_bar.classList.toggle('active');
   
}

window.onscroll = ()=>{

    menu_bar.classList.remove('active');
}