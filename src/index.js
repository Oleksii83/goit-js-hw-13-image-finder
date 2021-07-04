import './sass/main.scss';
import galleryTamplate from '../src/template/gallery.hbs';
import photoCardTemplate from '../src/template/photo-card.hbs';
import searchFormTemplate from '../src/template/search-form.hbs';

const API_KEY = '22354412-39f12e0c13d349d19862b3301';
const BASE_URL = 'https://pixabay.com/api/';

const url = fetch(
  `${BASE_URL}?image_type=photo&orientation=horizontal&q&page&per_page=12&key=${API_KEY}`,
)
  .then(r => r.json())
  .then(console.log);
