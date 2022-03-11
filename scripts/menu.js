const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';

openEls.forEach((el) => {
  el.addEventListener('click', function () {
    const menuId = this.dataset.open;
    document
      .getElementById(menuId)
      .classList.add(isVisible);
  });
});

closeEls.forEach((el) => {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
});

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.menu.is-visible')) {
    document.querySelector('.menu.is-visible').classList.remove(isVisible);
  }
});

document.addEventListener('keyup', (e) => {
  // if we press the ESC
  if (e.key === 'Escape' && document.querySelector('.menu.is-visible')) {
    document.querySelector('.menu.is-visible').classList.remove(isVisible);
  }
});
