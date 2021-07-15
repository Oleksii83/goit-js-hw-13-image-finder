import './sass/main.scss';
import NewsAPI from './js/apiService';
import galleryTamplate from '../src/template/gallery.hbs';
import photoCardTemplate from '../src/template/photo-card.hbs';
import searchFormTemplate from '../src/template/search-form.hbs';
import LoadMoreBtn from './js/load-more-btn';

const refs = {
  galleryContainer: document.querySelector('.js-gallery_container'),
  searchForm: document.querySelector('.search-form'),
  // loadMoreBtn: document.querySelector('[data-action="load_more"]'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
console.log('🚀 ~ file: index.js ~ line 17 ~ loadMoreBtn', loadMoreBtn);

const newsAPI = new NewsAPI();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();

  clearContainer();
  newsAPI.query = e.currentTarget.elements.query.value;

  if (newsAPI.query === '') {
    return alert('Enter name');
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
