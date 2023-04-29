import call from '../images/call.svg';

export const lastScreen = () => {
  return `
    <div class="container screenContainer testModal">
  <h2 class="title">Ваш результат рассчитан:</h2>
  <p class="message">
    вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 15
    пунктов отличается от среднего в большую или меньшую сторону!
  </p>
  <h2 class="appeal">Скорее получите свой результат!</h2>
  <p class="warning">
    В целях защиты персональных данных результат теста, их подробная
    интерпретация и рекомендации доступны в виде голосового сообщения по звонку
    с вашего мобильного телефона
  </p>
  <p class="timerText">Звоните скорее, запись доступна всего</p>
  <div class="timerWrap"><div class="timer">10:00</div><div class="timerText">минут</div></div>
  <button class="callBtn">
    <img width="30" height="30"
      src=${call} alt="call"
    >
    <span>позвонить и прослушать результат<span/>
  </button>
  
</div>`;
};
