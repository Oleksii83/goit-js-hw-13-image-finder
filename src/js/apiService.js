const API_KEY = 22354412-39f12e0c13d349d19862b3301
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

const BASE_URL = 'https://pixabay.com/api/';
function fetchCountries(countriesName) {
  return fetch(`${BASE_URL}/name/${countriesName}`).then(response => {
    return response.json();
  });
}

export default { fetchCountries };
