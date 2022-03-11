let htmlElements = '';

const projects = [
  {
    id: 'projects-wrapper',
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    langs: {
      html: 'HTML/CSS',
      ruby: 'Ruby on Rails',
      js: 'JavaScript',
    },
  },
  {
    id: 'projects-wrapper',
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    langs: {
      html: 'HTML/CSS',
      ruby: 'Ruby on Rails',
      js: 'JavaScript',
    },
  },
  {
    id: 'projects-wrapper',
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    langs: {
      html: 'HTML/CSS',
      ruby: 'Ruby on Rails',
      js: 'JavaScript',
    },
  },
  {
    id: 'projects-wrapper',
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    langs: {
      html: 'HTML/CSS',
      ruby: 'Ruby on Rails',
      js: 'JavaScript',
    },
  },
  {
    id: 'projects-wrapper',
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    langs: {
      html: 'HTML/CSS',
      ruby: 'Ruby on Rails',
      js: 'JavaScript',
    },
  },
  {
    id: 'projects-wrapper',
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    langs: {
      html: 'HTML/CSS',
      ruby: 'Ruby on Rails',
      js: 'JavaScript',
    },
  },
  {
    id: 'projects-wrapper',
    name: 'Project name goes here',
    demo: 'https://ksigei.github.io/portfolio2/',
    source: 'https://github.com/ksigei/portfolio2',
    langs: {
      html: 'HTML/CSS',
      ruby: 'Ruby on Rails',
      js: 'JavaScript',
    },
  },
];

for (let i = 0; i <= 6; i += 1) {
  htmlElements
   += ` 
   <div class="modal" id="modal2" data-animation="mixInAnimations">
   <div class="modal-dialog">
     <header class="modal-header">
       <button class="close-modal" aria-label="close modal" data-close>
         ✕  
       </button>
     </header>
     <section class="modal-content">
       <h3>Project name goes here</h3> 
       <div class="list-languages">
           <ul>
               <li class="langs-li-dsk cursor"><p>${projects[projects.length - 1].html}</p></li>
               <li class="langs-li-dsk cursor"><p>${projects[projects.length - 1].ruby}</p></li>
               <li class="langs-li-dsk cursor"><p>${projects[projects.length - 1].js}</p></li>
           </ul>
       </div>
       <div class="modal-carousel">
           <img src="./images/carousel.svg" alt="">
       </div>
       
       <div class="modal-description">
           <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
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
}

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

const container = document.getElementById('#projects');
container.innerHTML = htmlElements;