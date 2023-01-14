import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdonwMenu) {
    this.dropdonwMenu = document.querySelectorAll(dropdonwMenu);

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  addDropDownEvents() {
    this.dropdonwMenu.forEach((menu) => {
      ['click', 'touchstart'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add('ativo');
    outsideClick(element, this.events, () => {
      element.classList.remove('ativo');
    });
  }

  init() {
    this.addDropDownEvents();
  }
}
