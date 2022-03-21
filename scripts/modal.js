const projects = [
  {
    name: 'World crypto summit',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    html: 'HTML/CSS',
    ruby: 'Ruby on Rails',
    js: 'JavaScript',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img: './images/carousel.svg',
  }, {
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    html: 'HTML/CSS',
    ruby: 'Ruby on Rails',
    js: 'JavaScript',
  }, {
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    html: 'HTML/CSS',
    ruby: 'Ruby on Rails',
    js: 'JavaScript',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    img: './images/speakers/armstrong.jpeg',
  }, {
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    html: 'HTML/CSS',
    ruby: 'Ruby on Rails',
    js: 'JavaScript',
  }, {
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    html: 'HTML/CSS',
    ruby: 'Ruby on Rails',
    js: 'JavaScript',
  }, {
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    html: 'HTML/CSS',
    ruby: 'Ruby on Rails',
    js: 'JavaScript',
  },
];

const cards_container = document.getElementById('modal_container');

projects.forEach((data) => {
  const card = document.createElement('div');
  card.classList = 'modal';

  const content = `<div id="modal2" data-animation="mixInAnimations">
  <div class="modal-dialog">
   <header class="modal-header">
     <button class="close-modal" aria-label="close modal" data-close>
       ✕  
     </button>
   </header>
   <section class="modal-content">
     <h3>${data.name}</h3> 
     <div class="list-languages">
         <ul>
             <li class="langs-li-dsk cursor"><p>${data.html}</p></li>
             <li class="langs-li-dsk cursor"><p>${data.ruby}</p></li>
             <li class="langs-li-dsk cursor"><p>${data.js}</p></li>
         </ul>
     </div>
     <div class="modal-carousel">
         <img src="${data.img}" alt="">
     </div>
     
     <div class="modal-description">
         <p>
         ${data.description}
         </p>

     </div>
     
     <div class="modal-btns">
         <div class="btn-1">
             <a href="#">
                 <p>See Live <span><img src="./images/resume.png" alt="image"/></span></p>
             </a>
         </div>
         <div class="btn-1">
             <a href="#">
                 <p>See Source <span><img src="./images/github.png" alt="image"/></span></p>
             </a>
         </div>
     </div>
     </section>
   
 </div>
</div>`;

container.innerHTML += content;
});





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

// const container = document.getElementById('#projects');
// container.innerHTML = htmlElements;