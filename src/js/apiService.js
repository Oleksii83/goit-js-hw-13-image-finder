export default class NesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(this);
    const API_KEY = '22354412-39f12e0c13d349d19862b3301';
    const BASE_URL = 'https://pixabay.com/api/';

    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=3&key=${API_KEY}`;
    return fetch(url)
      .then(r => r.json())
      .then(data => {
        this.incrementPage();

        return data.hits;
      });
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
