import image8 from '../images/image-8.jpg';
import image10 from '../images/image-10.jpg';
import image11 from '../images/image 11.jpg';
import group from '../images/group.png';
export const data = [
  { id: 0, question: 'Ваш пол:', options: ['Мужчина', 'Женщина'] },
  {
    id: 1,
    question: 'Укажите ваш возраст:',
    options: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36'],
  },
  {
    id: 2,
    question: 'Выберите лишнее:',
    options: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
  },
  {
    id: 3,
    question: 'Продолжите числовой ряд: 18  20  24  32 ',
    options: ['62', '48', '74', '57', '60', '77'],
  },
  {
    id: 4,
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    options: [
      '#A8A8A8',
      '#0000A9',
      '#00A701',
      '#F60100',
      '#FDFF19',
      '#A95403',
      '#000000',
      '#850068',
      '#46B2AC',
    ],
  },
  {
    id: 5,
    question:
      'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    options: [
      '#A8A8A8',
      '#46B2AC',
      '#A95403',
      '#00A701',
      '#000000',
      '#F60100',
      '#850068',
      '#FDFF19',
      '#0000A9',
    ],
  },
  {
    id: 6,
    question: 'Какой из городов лишний?',
    options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
  },
  {
    id: 7,
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    options: ['1', '2', '3', '4'],
    image: image8,
  },
  {
    id: 8,
    question: 'Вам привычнее и важнее:',
    options: [
      'Наслаждаться каждой минутой проведенного времени',
      'Быть устремленными мыслями в будущее',
      'Учитывать в ежедневной практике прошлый опыт',
    ],
  },
  {
    id: 9,
    question:
      'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
    options: [
      'Оно остроконечное',
      'Оно устойчиво',
      'Оно-находится в состоянии равновесия',
    ],
    image: image10,
  },
  {
    id: 10,
    question: 'Вставьте подходящее число',
    options: ['34', '36', '53', '44', '66', '42'],
    image: image11,
  },
  {
    id: 11,
    question: 'Oбработка результатов',
    image: group,
  },
];
