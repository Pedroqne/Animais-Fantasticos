export default function initDropdownMenu() {
  const dropdonwMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, () => {
      this.classList.remove('ativo');
    });
  }

  dropdonwMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function outsideClick(element, callback) {
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
  }
}
