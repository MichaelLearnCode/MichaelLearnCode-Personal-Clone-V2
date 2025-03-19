const navbarLists = document.querySelector('.navbar .nav-link-lists');
const navbarToggler = document.querySelector('.navbar .navbar-toggler');

if (navbarLists && navbarToggler){
    navbarToggler.addEventListener('click', ()=>{
        navbarLists.classList.toggle('collasped');
    })
}