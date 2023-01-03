import NavTab from './navTab.js';
import Accordion from './initAccordion.js';
import ScrollSuave from './scrollSuave.js';
import initModal from './modal.js';
import initTooltip from './toolTip.js';
import initDropdownMenu from './dropdown.js';
import initMenuMobile from './menuMobile.js';
import initAnimaScroll from './animaScroll.js';
import initAnimaNumeros from './animaNumeros.js';
import initFuncionamento from './funcionamento.js';

const options = { behavior: 'smooth', block: 'start' };

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]', options);
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const navTab = new NavTab('.js-menutab li', '.js-menucontent section');
navTab.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaScroll();
initAnimaNumeros();
initFuncionamento();
