import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(btnMenu, menuList) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.getElementById(menuList);

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.btnMenu.classList.toggle('ativo');
    this.menuList.classList.add('ativo');
    outsideClick(this.menuList, ['click', 'touchstart'], () => {
      this.menuList.classList.remove('ativo');
    });
  }

  addEventMenuMobile() {
    this.btnMenu.addEventListener('click', this.openMenu);
  }

  init() {
    if (this.btnMenu && this.menuList) {
      this.addEventMenuMobile();
    }
    return this;
  }
}
