import { data } from './dataModel';

const refs = {
  containerEl: document.querySelector('.test'),
  btnPassTestEl: document.querySelector('.btnPassTest'),
  brainImageEl: document.querySelector('.brainHeader'),
  headerTitleEl: document.querySelector('.headerText'),
  linkFromMenuEl: document.querySelector('.linkPassTest'),
};

refs.btnPassTestEl.addEventListener('click', onClickPassTest);
refs.linkFromMenuEl.addEventListener('click', onClickPassTest);

let completing = 0;
let counter = 0;
let content;

const markupForLists = () => {
  return `${data[counter].options
    .map(option => {
      return `<div class="wrap">
      <input id="${option}" class="inputCheck" type="checkbox" name="${option}" />
      <label for="${option}" class="label">
        ${option}
      </label>
    </div>`;
    })
    .join('')}`;
};

const markupForColors = () => {
  return ` <div class="colorWrap">
        ${data[counter].options
          .map(option => {
            return `<input
          type="checkBox"
          class="square"
          name="${option}"
          style="background-color: ${option}"
        />`;
          })
          .join('')}
      </div>`;
};

const markupForImages = () => {
  console.log(data[counter].image);
  return `
  <img src="${data[counter].image}" alt="picture" class="imageQuestion"/>
<div class="checkboxWrap">
 ${data[counter].options
   .map(option => {
     return `<input
          type="checkBox"
          class="littleSquare"
          name="${option}"
          
        />`;
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
    case 11:
      content = markupForImages();
      break;
    default:
      content = markupForLists();
  }

  return `<div class="container testModal" id="passTest">
<progress class="progress" max="100" value="${completing}"></progress>
<div>
<h2 class="question">${data[counter].question}</h2>
<form class="testForm">
${content}
<button type="submit" class="btnNext">ДАЛЕЕ</button>
</form>
</div>
</div>
`;
};

function onClickPassTest() {
  refs.brainImageEl.style.visibility = 'visible';
  refs.headerTitleEl.style.visibility = 'visible';

  refs.containerEl.innerHTML = createMarkup();
  const formEl = document.querySelector('.testForm');
  formEl.addEventListener('submit', onFormSubmit);
}

const onFormSubmit = e => {
  e.preventDefault();
  counter += 1;
  completing += 100 / 12;
  refs.containerEl.innerHTML = createMarkup();
  const formEl = document.querySelector('.testForm');
  formEl.addEventListener('submit', onFormSubmit);
};
