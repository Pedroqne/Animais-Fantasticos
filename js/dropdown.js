import outsideClick from "./outsideClick.js";

export default class initDropdownMenu {
  constructor(dropdonwMenu) {
    this.dropdonwMenu = document.querySelectorAll(dropdonwMenu);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event);
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add('ativo');
    outsideClick(element, () => {
      element.classList.remove('ativo');
    });
  }

  addDropDownEvents() {
    this.dropdonwMenu.forEach((menu) => {
      ['click', 'touchstart'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }

  init() {
    this.addDropDownEvents();
  }
}
