export default function initMenuMobile() {
  const btnMenu = document.querySelector('[data-menu="button"]');
  const menuList = document.getElementById('menu');

  function openMenu(event) {
    event.preventDefault();
    btnMenu.classList.toggle('ativo');
    menuList.classList.add('ativo');
    outsideClick(menuList, ['click', 'touchstart'], () => {
      menuList.classList.remove('ativo');
    });
  }

  btnMenu.addEventListener('click', openMenu);

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
      });
      element.setAttribute(outside, '');
    }
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      }
    }
  }
}
