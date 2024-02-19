const btn = document.querySelector('.btn-hamburger');
const mobile = document.querySelector('.mobile-menu')


btn.addEventListener('click', function () {

    mobile.classList.toggle('show');
    btn.classList.toggle('active')
    
})