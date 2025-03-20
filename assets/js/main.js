const navbarLists = document.querySelector('.navbar .nav-link-lists');
const navbarToggler = document.querySelector('.navbar .navbar-toggler');

if (navbarLists && navbarToggler){
    navbarToggler.addEventListener('click', ()=>{
        navbarLists.classList.toggle('collasped');
    })
}

const navLinks = document.querySelectorAll('.nav-link-item');

navLinks.forEach(navLink=>{
    if (navLink){
        navLink.addEventListener('click', ()=>{
            const dropDown = navLink.querySelector('.dropdown-menu');
            if (dropDown){
                dropDown.classList.toggle('open');
            }
        })
    }
})