// let htmlElements = '';

const htmlArrays = [
  {
    image: "./images/screenshots/ss4.png",
    name: "World crypto-currency summit",
    demo: "https://ksigei.github.io/portfolio2/",
    source: "https://github.com/ksigei/portfolio2",
    description: "Html, css capstone project",
    langs: {
      html: "HTML/CSS",
      ruby: "Ruby on Rails",
      js: "JavaScript",
    },
  },
  {
    image: "./images/screenshots/ss4.png",
    name: "Project name goes here",
    demo: "https://ksigei.github.io/portfolio2/",
    source: "https://github.com/ksigei/portfolio2",
    description: "Html, css capstone project",
    langs: {
      html: "HTML/CSS",
      ruby: "Ruby on Rails",
      js: "JavaScript",
    },
  },
  {
    image: "./images/screenshots/ss4.png",
    name: "Project name goes here",
    demo: "https://ksigei.github.io/portfolio2/",
    source: "https://github.com/ksigei/portfolio2",
    description: "Html, css capstone project",
    langs: {
      html: "HTML/CSS",
      ruby: "Ruby on Rails",
      js: "JavaScript",
    },
  },
  {
    image: "./images/screenshots/ss4.png",
    name: "Project name goes here",
    demo: "https://ksigei.github.io/portfolio2/",
    source: "https://github.com/ksigei/portfolio2",
    description: "Html, css capstone project",
    langs: {
      html: "HTML/CSS",
      ruby: "Ruby on Rails",
      js: "JavaScript",
    },
  },
  {
    image: "./images/screenshots/ss4.png",
    name: "Project name goes here",
    demo: "https://ksigei.github.io/portfolio2/",
    source: "https://github.com/ksigei/portfolio2",
    description: "Html, css capstone project",
    langs: {
      html: "HTML/CSS",
      ruby: "Ruby on Rails",
      js: "JavaScript",
    },
  },
  {
    image: "./images/screenshots/ss4.png",
    name: "Project name goes here",
    demo: "https://ksigei.github.io/portfolio2/",
    source: "https://github.com/ksigei/portfolio2",
    description: "Html, css capstone project",
    langs: {
      html: "HTML/CSS",
      ruby: "Ruby on Rails",
      js: "JavaScript",
    },
  },
  {
    image: "./images/screenshots/ss4.png",
    name: "Project name goes here",
    demo: "https://ksigei.github.io/portfolio2/",
    source: "https://github.com/ksigei/portfolio2",
    description: "Html, css capstone project",
    langs: {
      html: "HTML/CSS",
      ruby: "Ruby on Rails",
      js: "JavaScript",
    },
  },
];
htmlArrays.forEach((item) => {
 const html = ` 
     <section class="modal-content">
       <h3>${item.name}</h3> 
       <div class="list-languages">
           <ul>
               <li class="langs-li-dsk cursor"><p>${item.langs.html}</p></li>
               <li class="langs-li-dsk cursor"><p>${item.langs.js}</p></li>
               <li class="langs-li-dsk cursor"><p>${item.langs.ruby}</p></li>
           </ul>
       </div>
       <div class="modal-carousel">
           <img src="${item.image}" alt="">
       </div>
       
       <div class="modal-description">
           <p>
           ${item.description}
           </p>

       </div>
       
       <div class="modal-btns">
           <div class="btn-1">
               <a href="${item.demo}">
                   <p>See Live <span><img src="./images/resume.png" alt="image"/></span></p>
               </a>
           </div>
           <div class="btn-1">
               <a href="${item.source}">
                   <p>See Source <span><img src="./images/github.png" alt="image"/></span></p>
               </a>
           </div>
       </div>
       </section>`;
const projects_view = document.getElementById("m_dialog");
projects_view.innerHTML = html;
});


const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

openEls.forEach((el) => {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
});

closeEls.forEach((el) => {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
});

document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key === "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

