const menu_btn = document.querySelector('#menu-btn');
const menu_bar = document.querySelector('.nav-bar');


menu_btn.addEventListener('click', showMenu);

function showMenu(){
    menu_bar.classList.toggle('active');
    console.log(Event);
   
}

// window.addEventListener("onselect", removeMenu);

// function removeMenu(){
//     menu_bar.classList.remove('active');
// }