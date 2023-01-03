export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  activeAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.activeAccordion(item));
    });
  }

  // inicia função
  init() {
    if (this.accordionList.length) {
      // inicia o primeiro item
      this.activeAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
