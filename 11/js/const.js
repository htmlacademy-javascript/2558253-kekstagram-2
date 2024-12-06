const DESCRIPTION = [
  'Красивый закат на берегу моря',
  'Музей современного искусства',
  'Театр оперы и балета',
  'Центральная улица города',
  'Гроза в деревне'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Антон',
  'Александр',
  'Артур',
  'Зорик',
  'Влад',
  'Таня',
  'Батор'
];

// мин и макс значения id,лайков,аватаров и комментариев;количество объектов в итоговом массиве
const Like = {
  MIN: 15,
  MAX: 200
};

const Avatar = {
  MIN: 1,
  MAX: 6
};
const Comments = {
  MIN: 0,
  MAX: 30
};

const SIMILAR_OBJECTS_COUNT = 25;

const SCALE_STEP = 0.25;

const MAX_COMMENT_LENGTH = 140;
const MAX_COMMENT_LENGTH_ERROR_MESSAGE = 'Превышено допустимое количество символов';

const EffectSelector = {
  'effect-none': 'effects__preview--none',
  'effect-chrome': 'effects__preview--chrome',
  'effect-sepia': 'effects__preview--sepia',
  'effect-marvin': 'effects__preview--marvin',
  'effect-phobos': 'effects__preview--phobos',
  'effect-heat': 'effects__preview--heat',
};

const getEffectSelector = (currentInputId) => EffectSelector[currentInputId];

const sliderOptionsObjectChromeSepia = {
  range: {
    min: 0,
    max: 1
  },
  start: 1,
  step: 0.1,
};

const sliderOptionsObjectMarvinDefault = {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1,
};

const sliderOptionsObjectPhobos = {
  range: {
    min: 0,
    max: 3
  },
  start: 3,
  step: 0.1,
};

const sliderOptionsObjectHeat = {
  range: {
    min: 1,
    max: 3
  },
  start: 3,
  step: 0.1,
};

const Effects = {
  none: sliderOptionsObjectMarvinDefault,
  chrome: sliderOptionsObjectChromeSepia,
  sepia: sliderOptionsObjectChromeSepia,
  marvin: sliderOptionsObjectMarvinDefault,
  phobos: sliderOptionsObjectPhobos,
  heat: sliderOptionsObjectHeat,
};

const StyleFilter = {
  chrome: (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value}%)`,
  phobos: (value) => `blur(${value}px)`,
  heat: (value) => `brightness(${value})`,
};

const styleFilterByEffect = {
  chrome: StyleFilter.chrome,
  sepia: StyleFilter.sepia,
  marvin: StyleFilter.marvin,
  phobos: StyleFilter.phobos,
  heat: StyleFilter.heat
};

export {DESCRIPTION, MESSAGES, NAMES, Like, Avatar, Comments, SIMILAR_OBJECTS_COUNT, SCALE_STEP, MAX_COMMENT_LENGTH, MAX_COMMENT_LENGTH_ERROR_MESSAGE, getEffectSelector, styleFilterByEffect, Effects};
