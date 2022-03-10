/* eslint-disable linebreak-style */
const body = document.querySelector('body');
const featuredbtn = document.getElementById('multipost');

const popUp = document.createElement('div');
popUp.classList.add('popup');

const projectList = [
  {
    id: 'firstProject',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'firstProject',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'firstProject',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'firstProject',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'firstProject',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'firstProject',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'sixthProject',
    title: 'Multi Post Stories',
    closebtn: '<i class="fa fa-times" aria-hidden="true"></i>',
    html: 'html',
    bootstrap: 'bootstrap',
    ruby: 'Ruby On Rails',
    projectImage: './images/mobilemodal.png',
    projectDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet animi voluptate doloribus at quaerat, vitae dicta sunt possimus voluptatum, facilis vel? Eligendi, harum ipsum excepturi sint at quasi? Repellendus eveniet suscipit quibusdam inventore architecto minus eligendi adipisci. Harum atque voluptate dolore fugiat pariatur eius ullam architecto porro aspernatur nihil.',
    projectbtnlive: 'https://telanet.github.io/portfolio/',
    projectbtnsource: 'https://telanet.github.io/portfolio/',
  },
];

function modalpopup() {
  popUp.style.display = 'block';
  body.appendChild(popUp);
  const showing = `
  <div class="popupcont">
      <div class="popupcontheader">
        <h2 class="desktophide">${projectList[projectList.length - 1].title}</h2>
        <h2 class="mobilehide">Keeping track of hundreds  of components website</h2>
        <button id="closeModal" class="closeModal">${projectList[projectList.length - 1].closebtn}</button>
      </div>
      <div class="popupcontlangs">
        <ul>
          <li>${projectList[projectList.length - 1].html}</li>
          <li>${projectList[projectList.length - 1].bootstrap}</li>
          <li>${projectList[projectList.length - 1].ruby}</li>
        </ul>
      </div>
      <div class="popupcontbody">
        <div class="popupcontbodyleft">
          <img src="${projectList[projectList.length - 1].projectImage}" alt="image">
        </div>
        <div class="popupcontbodyright">
          <p class="desktophide">${projectList[projectList.length - 1].projectDesc}</p>
          <p class="mobilehide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
          <div class="popupcontbodyrightbtns">
          <a href="https://telanet.github.io/portfolio/"><button type="button" id="modalbtns live">See Live <img src="./images/viewlive.png" alt="view live"></button></a>
          <a href="https://github.com/telanet/portfolio"><button type="button" id="modalbtns live">See Source <img src="./images/viewsource.png" alt="view Source"></button></a>
          </div>
        </div>
      </div>
    </div>
  `;
  popUp.innerHTML = showing;
  body.appendChild(popUp);

  const closebtn = document.getElementById('closeModal');
  closebtn.onclick = function () {
    popUp.style.display = 'none';
  };
}

document.addEventListener('click', (click) => {
  if (click.target.id === 'firstProject') {
    modalpopup();
  }
});
featuredbtn.onclick = modalpopup;

const projectsSection = document.querySelector('.projects');
function loopdiv() {
  projectsSection.innerHTML = '';
  for (let i = 0; i < projectList.length - 1; i += 1) {
    projectsSection.innerHTML = `${projectsSection.innerHTML}
  <div class="project">
           <div class="projectHeader">
             <h3>${projectList[i].projectHeader}</h3>
           </div>
           <div class="projectBody">
             <p>
             ${projectList[i].projectDesc}
             </p>
             <ul>
               <li class="projectHTML">
                 <ul>
                  <li>${projectList[i].projectHtml}</li>
                 </ul>
               </li>
               <li class="projectBootstrap">
                 <ul>
                   <li>${projectList[i].projectbootstrap}</li>
                 </ul>
               </li>
               <li class="projectRuby">
                 <ul>
                   <li>${projectList[i].projectRuby}</li>
                 </ul>
               </li>
             </ul>
           </div>
           <div class="projectButton openProject">
             <button id="firstProject" class="testbtnn" onClick="loopdiv()">${projectList[i].projectButton}</button>
           </div>
      </div>`;
  }
}

window.addEventListener('load', () => {
  loopdiv();
});