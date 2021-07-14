import './sass/main.scss';
import NewsAPI from './js/apiService';
import galleryTamplate from '../src/template/gallery.hbs';
import photoCardTemplate from '../src/template/photo-card.hbs';
import searchFormTemplate from '../src/template/search-form.hbs';

const refs = {
  galleryContainer: document.querySelector('.js-gallery_container'),
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('[data-action="load_more"]'),
};

const newsAPI = new NewsAPI();
console.log('🚀 ~ file: index.js ~ line 14 ~ newsAPI', newsAPI);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  clearContainer();
  newsAPI.query = e.currentTarget.elements.query.value;
  newsAPI.resetPage();
  newsAPI.fetchArticles().then(rendergalleryImageItem);
}

function rendergalleryImageItem(hits) {
  const markup = galleryTamplate(articles);
  refs.galleryContainer.innerHTML = markup;
}

function onLoadMore() {
  newsAPI.fetchArticles().then(rendergalleryImageItem);
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
