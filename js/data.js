import { getRandomInt, getRandomElement, createCounter } from './util';
import { DESCRIPTIONS, NAMES, MESSAGES, MIN_LIKES, MAX_LIKES, MIN_AVATAR, MAX_AVATAR, MIN_COMMENTS, MAX_COMMENTS, MIN_MESSAGES, MAX_MESSAGES, PHOTOS_COUNT } from './consts';
/**
 * @typedef {Object} Comment
 * @property {number} id - Уникальный идентификатор комментария
 * @property {string} avatar - Путь к SVG аватару пользователя (img/avatar-X.svg)
 * @property {string} message - Сообщение
 * @property {string} name - Имя пользователя из списка
 */

/**
 * @typedef {Object} Photo
 * @property {number} id - Уникальный идентификатор фотографии
 * @property {string} url - Путь к фотографии
 * @property {string} description - Описание фотографии
 * @property {number} likes - Количество лайков
 * @property {Comment[]} comments - Массив с объектами комментариев
 */


const getPhotoId = createCounter(1);
const getCommentId = createCounter(1);

/**
 * Генерирует один случайный комментарий
 *
 * @returns {Comment}
 */
const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInt(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: Array.from({length: getRandomInt(MIN_MESSAGES, MAX_MESSAGES)}, () => getRandomElement(MESSAGES)).join(' '),
  name: getRandomElement(NAMES)
});

/**
 * Генерирует одну фотографию
 * @returns {Photo}
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
 * Генерирует массив случайной фотографий в количестве PHOTOS_COUNT
 *
 * @returns {Photo[]} Массив, заполненный элементами типа Photo
 */
export const createPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);
