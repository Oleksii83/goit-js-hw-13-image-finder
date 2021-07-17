import './sass/main.scss';
import NewsAPI from './js/apiService';
import galleryTamplate from '../src/template/gallery.hbs';
import photoCardTemplate from '../src/template/photo-card.hbs';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import LoadMoreBtn from './js/load-more-btn';

defaultModules.set(PNotifyMobile, {});

const refs = {
  galleryContainer: document.querySelector('.js-gallery_container'),
  searchForm: document.querySelector('.search-form'),
  anchor: document.querySelector('.anchor'),
  // loadMoreBtn: document.querySelector('[data-action="load_more"]'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
console.log('🚀 ~ file: index.js ~ line 17 ~ loadMoreBtn', loadMoreBtn);

const newsAPI = new NewsAPI();
// console.log('🚀 ~ file: index.js ~ line 22 ~ newsAPI', newsAPI);

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener(
  'click',
  fetchArticles,
  handleButtonClick,
);

const btnLoadEnd = document.querySelector('.anchor');
function handleButtonClick() {
  btnLoadEnd.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function onSearch(e) {
  e.preventDefault();

  clearContainer();
  newsAPI.query = e.currentTarget.elements.query.value;

  if (newsAPI.query === '') {
    alert({
      text: 'Too many matches found. Please enter a more specific query!',
    });
    return;
  }

  newsAPI.resetPage();
  loadMoreBtn.show();
  fetchArticles();
}

function rendergalleryImageItem(hits) {
  const markup = galleryTamplate(articles);
  refs.galleryContainer.innerHTML = markup;
}

function fetchArticles() {
  loadMoreBtn.disable();
  newsAPI.fetchArticles().then(articles => {
    rendergalleryImageItem(articles);
    loadMoreBtn.enable();
  });
}

function rendergalleryImageItem(hits) {
  refs.galleryContainer.insertAdjacentHTML(
    'beforeend',
    photoCardTemplate(hits),
  );
}
function clearContainer() {
  refs.galleryContainer.innerHTML = '';
}

//Бесконечный скрол

// let srartIndex = 0;
// const COUNTRY_COUNT = 10;

// const observer = new IntersectionObserver(observerCallback, {
//   threshold: 0,
// });

// observer.observe(refs.anchor);

// function observerCallback() {
//   loadMoreBtn.disable();
//   newsAPI.fetchArticles().then(articles => {
//     rendergalleryImageItem(articles);
//     loadMoreBtn.enable();
//   });
//   if (!newsAPI.isIntersecting) return;
// }

// function renderPhoto() {
//   const partPhoto = countries.slice(starIndex, starIndex + COUNTRY_COUNT);
//   const
// }
