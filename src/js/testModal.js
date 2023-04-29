import { data } from './dataModel';
import { lastScreen } from './lastScreen';

const refs = {
  containerEl: document.querySelector('.test'),
  mainContainer: document.querySelector('.mainContainer'),
  btnPassTestEl: document.querySelectorAll('.btnPassTest'),
  brainImageEl: document.querySelector('.brainHeader'),
  headerTitleEl: document.querySelector('.headerText'),
  linkFromMenuEl: document.querySelector('.linkPassTest'),
};

refs.btnPassTestEl.forEach(btn =>
  btn.addEventListener('click', onClickPassTest)
);

refs.linkFromMenuEl.addEventListener('click', onClickPassTest);

let completing = 0;
let counter = 0;
let content;
let time = 10 * 60 * 1000;

const markupForLists = () => {
  return `<div class="wrap">${data[counter].options
    .map(
      option =>
        `<label class="custom-checkbox"> 
  <input class="hidden-checkbox" type="radio" name="${data[counter].id}">
    <div class="checkbox"></div>
    ${option}
</label>`
    )
    .join('')}</div>`;
};

const markupForColors = () => {
  return ` <div class="colorWrap">
        ${data[counter].options
          .map(option => {
            return `<label class="custom-checkboxColor"> 
  <input class="hidden-checkbox" type="radio" name="${data[counter].id}">
    <div class="checkboxColor" style="background-color: ${option}"></div>
   
</label>`;
          })
          .join('')}
      </div>`;
};

const markupForImages = () => {
  return `
  
<div class="checkboxWrap">
 ${data[counter].options
   .map(option => {
     return `<label class="custom-checkboxForImage">
     <input
          type="radio"
          class="hidden-checkbox"
          name="${data[counter].id}"
          
        /><div class="checkboxForImage">${option}</div>
   
</label>`;
   })
   .join('')}</div> `;
};

const createMarkup = () => {
  switch (counter) {
    case 4:
    case 5:
      content = markupForColors();
      break;
    case 7:
    case 10:
      content = markupForImages();
      break;
    case 11:
      content = `<div></div>`;

      break;
    default:
      content = markupForLists();
  }

  return `<div class="container testModal" id="passTest">
<progress class="progress" max="100" value="${completing}"></progress>
<div>
<h2 class="question">${data[counter].question}</h2>
${
  data[counter].image
    ? `<img src='${data[counter].image}' alt="picture" class="imageQuestion"/>`
    : `<div></div>`
}
${
  data[counter].options
    ? `<form class="testForm">
${content}
<button type="submit" class="btnNext">ДАЛЕЕ</button>
</form>`
    : `<p class="text">Определение стиля мышления....</p>`
}

</div>
</div>
`;
};

function onClickPassTest() {
  refs.brainImageEl.style.visibility = 'visible';
  refs.headerTitleEl.style.visibility = 'visible';

  refs.mainContainer.innerHTML = createMarkup();

  const formEl = document.querySelector('.testForm');
  formEl.addEventListener('submit', onFormSubmit);
}

const onFormSubmit = e => {
  e.preventDefault();
  counter += 1;

  completing += 100 / 11;
  refs.mainContainer.innerHTML = createMarkup();
  const formEl = document.querySelector('.testForm');
  formEl && formEl.addEventListener('submit', onFormSubmit);
  !formEl &&
    setTimeout(() => {
      refs.mainContainer.innerHTML = lastScreen();
      refs.headerTitleEl.textContent = 'ГОТОВО';
      const timer = document.querySelector('.timer');
      const btnForFetch = document.querySelector('.callBtn');

      btnForFetch.addEventListener('click', onClickBtnCall);

      setInterval(() => {
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);

        timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`;

        time -= 1000;

        if (time < 0) {
          clearInterval(countdownTimer);
          timer.innerHTML = '00:00';
        }
      }, 1000);
    }, 1000);
};

const onClickBtnCall = () => {
  fetchPeople()
    .then(user => markupUser(user))

    .catch(error => console.log(error));
};

const fetchPeople = async () => {
  const response = await fetch('https://swapi.dev/api/people/1/');
  return await response.json();
};

const markupUser = user => {
  const keys = Object.keys(user);
  console.log(user);
  const userU = keys.map(key => {
    typeof user[key] === 'object' && user[key].join(',');
  });

  const markup = `<div class="screenContainer answer">${keys
    .map(key => {
      const value =
        typeof user[key] === 'object' ? user[key].join(',') : user[key];
      return `
          <p>${key}: ${value}</p>`;
    })
    .join('')}</div>`;
  const el = document.querySelector('.testModal');

  el.insertAdjacentHTML('beforeend', markup);
};
