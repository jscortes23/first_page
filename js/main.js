const btnMenuDropdown = document.querySelector('.btn-menu');
const menuMobile = document.querySelector('.navbar-mobile');
const itemMenu = document.querySelectorAll('.item-nav');

btnMenuDropdown.addEventListener('click', () => {
    menuMobile.classList.toggle('hidden')
})

itemMenu.forEach( (item) => {
    item.addEventListener('click', () => {
        menuMobile.classList.toggle('hidden')
    })
})