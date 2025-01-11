import {debounce} from './util.js';
import {renderThumbnails} from './thumbnails.js';

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const MAX_PICTURE_COUNT = 10;

let currentFilter = 'filter-default';
let pictures = [];
const filterElement = document.querySelector('.img-filters');
const SORTFUNC = {
  getRandomValue: () => 0.5 - Math.random(),
  sortByComments: (a, b) => b.comments.length - a.comments.length,
};

const debounceRender = debounce(renderThumbnails);

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const applyFilter = () => {
  let filteredPictures = [];
  switch (currentFilter) {
    case Filter.DEFAULT:
      filteredPictures = pictures;
      break;
    case Filter.RANDOM:
      filteredPictures = pictures.toSorted(SORTFUNC.getRandomValue).slice(0, MAX_PICTURE_COUNT);
      break;
    case Filter.DISCUSSED:
      filteredPictures = pictures.toSorted(SORTFUNC.sortByComments);
      break;
  }
  debounceRender(filteredPictures);
};

const onFilterChange = (evt) => {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if (!activeButton) {
    return;
  }
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');
  applyFilter();
};

const initFilter = (photos) => {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = photos;
};

export {initFilter};
