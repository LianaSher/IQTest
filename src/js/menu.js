const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  menuList: document.querySelector('.listMenu'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
refs.menuList.addEventListener('click', toggleMenu);

function toggleMenu() {
  refs.menu.classList.toggle('is-open');
}
