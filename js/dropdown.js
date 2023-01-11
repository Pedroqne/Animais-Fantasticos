export default class DropdownMenu {
  constructor(menu) {
    this.dropdonwMenus = document.querySelectorAll(menu);

    this.dropdonwMenus = this.dropdonwMenus.bind(this);
  }
 
  handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, () => {
      this.classList.remove('ativo');
    });
  }

  addEventsMenu() {
        menu.addEventListener('touchstart', this.handleClick);
        menu.addEventListener('click', this.handleClick);
      }

  outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
      html.addEventListener('click', handleOutsideClick);
      html.addEventListener('touchstart', handleOutsideClick);
      element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        html.removeEventListener('click', handleOutsideClick);
        html.removeEventListener('touchstart', handleOutsideClick);
        callback();
      }
    }
    init() {
      if (this.dropdonwMenus.length) {
        this.addEventsMenu();
      }
      return this
    }
  }
}
