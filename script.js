const menu_btn = document.querySelector('#menu-btn');
const menu_bar = document.querySelector('.nav-bar');





menu_btn.addEventListener('click', showMenu);

function showMenu(){
    menu_bar.classList.toggle('active');
   
}

window.onscroll = ()=>{

    menu_bar.classList.remove('active');
}



//BACK TO TOP BUTTON
const scrollTop = function (){
        const scroll_btn = document.querySelector('#scrollbtn');

            const rootElement = document.documentElement;
            const TOGGLE_RATIO = 0.80;

            function handleScroll() {
            // do something on scroll
            const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
                
                if ((rootElement.scrollTop / scrollTotal) < TOGGLE_RATIO) {
                //show button
                scroll_btn.classList.remove("showBtn")
                
            } else {
                //hide button
                scroll_btn.classList.add("showBtn")
                

        }
    }
    scroll_btn.addEventListener("click", scrollToTop)

            function scrollToTop() {
            //scroll to top logic
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
                })
            }
    
    document.addEventListener("scroll", handleScroll)
                
};

scrollTop();
