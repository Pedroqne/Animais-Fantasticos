export default function navTab() {
  const tabMenu = document.querySelectorAll('.js-menutab li');
  const tabContent = document.querySelectorAll('.js-menucontent section');
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
