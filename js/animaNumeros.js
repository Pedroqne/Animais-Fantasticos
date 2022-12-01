export default function initAnimaNumeros() {
  const observer = new MutationObserver(handleMutantion);
  const numeros = document.querySelectorAll('[data-numero]');

  function animaNumeros() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => { //
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutantion(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');

  observer.observe(observerTarget, { attributes: true });
}
