import NavTab from './navTab.js';
import Accordion from './initAccordion.js';
import ScrollSuave from './scrollSuave.js';
import Modal from './modal.js';
import Tooltip from './toolTip.js';
import DropdownMenu from './dropdown.js';
import AnimaScroll from './animaScroll.js';
import AnimaNumeros from './animaNumeros.js';
import initFuncionamento from './funcionamento.js';
import MenuMobile from './menuMobile.js';

const options = { behavior: 'smooth', block: 'start' };

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]', options);
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const navTab = new NavTab('.js-menutab li', '.js-menucontent section');
navTab.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-toolTip]');
tooltip.init();

const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
animaNumeros.init();

const animaScroll = new AnimaScroll('.js-scroll');
animaScroll.init();

const dropdonwMenu = new DropdownMenu('[data-dropdown]');
dropdonwMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', 'menu');
menuMobile.init();

initFuncionamento();
