const DESCRIPTIONS = [
  'Красивый закат над морем',
  'Утро в горах',
  'Мой любимый кот',
  'Прогулка по парку',
  'Осенние листья',
  'Зимний лес',
  'Весенние цветы',
  'Летний пляж',
  'Городские огни ночью',
  'Кофе с видом на реку',
  'Книги и чай',
  'Дорога домой',
  'Небо в звёздах',
  'Море волн',
  'Солнце сквозь облака',
  'Друзья и смех',
  'Тихий вечер',
  'Улыбка дня',
  'Путешествие начинается',
  'Момент счастья',
  'Природа зовёт',
  'Городской ритм',
  'Спокойствие',
  'Энергия дня',
  'Мечты сбываются'
];

const NAMES = [
  'Анна', 'Иван', 'Мария', 'Дмитрий', 'Елена', 'Алексей', 'Ольга', 'Сергей',
  'Татьяна', 'Михаил', 'Екатерина', 'Николай', 'Светлана', 'Виктор', 'Юлия',
  'Павел', 'Наталья', 'Андрей', 'Ирина', 'Константин', 'Евгения', 'Роман',
  'Александра', 'Владимир', 'Галина'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// мин и макс значения лайков,аватаров и комментариев;количество объектов в итоговом массиве
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_MESSAGES = 1;
const MAX_MESSAGES = 2;
const PHOTOS_COUNT = 25;

/**
 * Возвращает случайное целое число в заданном диапазоне включительно.
 *
 * @param {number} min - Минимальное значение диапазона (включительно)
 * @param {number} max - Максимальное значение диапазона (включительно)
 * @returns {number} Случайное целое число от min до max включительно
 *
 * @throws {RangeError} Если min > max
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Возвращает случайный элемент из массива
 *
 * @param {Array} array - Массив, из которого выбирается элемент
 * @returns {*} - Случайный элемент массива
 *
 * @throws {RangeError} - Если массив пустой
 */
const getRandomElement = (array) => array[getRandomInt(0, array.length - 1)];

/**
 * Создает фабрику счетчиков, используя замыкание
 *
 * @param {number} [start=1] - Начальное значение счетчика
 * @returns {()=>number} - Функция-счетчик, увеличивающая значение на 1 при каждом вызове
 */
const createCounter = (start = 1) => {
  let count = start;
  return () => count++;
};

const getPhotoId = createCounter(1);
const getCommentId = createCounter(1);

/**
 * Генерирует один случайный комментарий
 *
 * @returns {Object} - Объект комментария со свойствами id, avatar, message, name
 */
const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInt(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: Array.from({length: getRandomInt(MIN_MESSAGES, MAX_MESSAGES)}, () => getRandomElement(MESSAGES)),
  name: getRandomElement(NAMES)
});

/**
 * Генерирует одну фотографию с комментариями
 *
 * @returns {Object} - Объект фотографии со свойствами id, url, description, likes, comments
 */
const createPhoto = () => {
  const photoId = getPhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomInt(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomInt(MIN_COMMENTS, MAX_COMMENTS)}, createComment)
  };
};

/**
 * Генерирует массив случайный фотографий в количестве PHOTOS_COUNT
 *
 * @returns {Array} - Массив объектов фотографий
 */
export const createPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);
