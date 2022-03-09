const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';

openEls.forEach((el) => {
  el.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document
      .getElementById(modalId)
      .classList.add(isVisible);
  });
});

closeEls.forEach((el) => {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
});

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
});

document.addEventListener('keyup', (e) => {
  // if we press the ESC
  if (e.key === 'Escape' && document.querySelector('.modal.is-visible')) {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
});