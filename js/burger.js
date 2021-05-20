const menu = document.querySelector('.menu');
//console.log('Menu: ', menu);

const menuItems = document.querySelectorAll('.menu-list__item');
//console.log("menuItems: ", menuItems)

const burger = document.querySelector('.humburger-menu');
//console.log('Burger: ', burger);

const toggleMenu = () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
}

const closeMenu = () => {
    menu.classList.remove('menu-active');
    burger.classList.remove('humburger-menu-active');
}

menuItems.forEach((item) => {
    item
    .children[0]
    .addEventListener('click', closeMenu);
});

burger.addEventListener('click', toggleMenu);