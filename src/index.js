import './sass/main.scss';
// import API from './js/apiService';
import galleryTamplate from '../src/template/gallery.hbs';
import photoCardTemplate from '../src/template/photo-card.hbs';
import searchFormTemplate from '../src/template/search-form.hbs';

const refs = {
  galleryContainer: document.querySelector('.js-gallery_container'),
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('[data-action="load_more"]'),
};
console.log(refs.searchForm);

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

let searchQuery = '';

function onSearch(e) {
  e.preventDefault();

  searchQuery = e.currentTarget.elements.query.value;

  const API_KEY = '22354412-39f12e0c13d349d19862b3301';
  const BASE_URL = 'https://pixabay.com/api/';

  const url = fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=3&key=${API_KEY}`,
  )
    .then(r => r.json())
    .then(data => {
      const markup = photoCardTemplate(data);
      refs.galleryContainer.innerHTML = markup;
    })

    .catch(error => {
      console.log(error);
    });
}

function rendergalleryImageItem(array) {
  const markup = galleryTamplate(gallery);
  refs.galleryContainer.innerHTML = markup;
}

function onLoadMore() {
  const API_KEY = '22354412-39f12e0c13d349d19862b3301';
  const BASE_URL = 'https://pixabay.com/api/';

  const url = fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=3&key=${API_KEY}`,
  )
    .then(r => r.json())
    .then(data => {
      const markup = photoCardTemplate(data);
      refs.galleryContainer.innerHTML = markup;
    })
    .then(data => {
      this.page += 1;
    });
}
