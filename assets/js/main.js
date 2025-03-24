const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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

// 

const modalTriggers = document.querySelectorAll('*[data-toggle = "modal"]');
modalTriggers.forEach(modalTrigger=>{
    if (!modalTrigger)return;
    modalTrigger.onclick = function(e){
        e.preventDefault();
        const modal = document.getElementById(this.getAttribute('data-target'));
        if (!modal)return;
        modal.classList.add('show');
        const modalTitle = modal.querySelector('.modal-title');
        if (modalTitle)
        modalTitle.textContent = this.getAttribute('data-title') ?? 'default title';
        const modalBody = modal.querySelector('.modal-body');
        if (modalBody)modalBody.textContent = this.getAttribute('data-body') ?? 'default body';
    }
})

const closeBtns = document.querySelectorAll('*[data-dismiss]');
closeBtns.forEach(closeBtn=>{
    if (!closeBtn)return;
    closeBtn.onclick = function(e){
        if (this.getAttribute('data-dismiss')==='modal'){
            const modal = this.closest('.modal');
            if (!modal)return;
            modal.classList.remove('show');
        }
    }
})
