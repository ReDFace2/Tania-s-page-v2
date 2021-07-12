(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.menu_wr');
    const menuCloseItem = document.querySelector('.menu_close');
    burgerItem.addEventListener('click', () =>{
        menu.classList.add('menu_wr_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('menu_wr_active');
    });
}());