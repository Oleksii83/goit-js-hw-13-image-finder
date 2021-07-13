export default class NesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(this);
    const API_KEY = '22354412-39f12e0c13d349d19862b3301';
    const BASE_URL = 'https://pixabay.com/api/';

    const url = fetch(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&${this.page}&per_page=3&key=${API_KEY}`,
    )
      .then(r => r.json())
      .then(data => {
        this.page += 1;
      });
    // .then(data => {
    //   const markup = photoCardTemplate(data);
    //   refs.galleryContainer.innerHTML = markup;
    // })

    // .catch(error => {
    //   console.log(error);
    // });
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// export default { mainLineData };

// const BASE_URL = 'https://pixabay.com/api/';
// function fetchCountries(countriesName) {
//   return fetch(`${BASE_URL}/name/${countriesName}`).then(response => {
//     return response.json();
//   });
// }

// export default { fetchCountries };

// const API_KEY = 22354412-39f12e0c13d349d19862b3301
// // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

// export default class newApiService {
//   constructor() {
//     this.searchQuery = '';
//   }
//   fetchArticles() {
//     const API_KEY = '22354412-39f12e0c13d349d19862b3301';
//     const BASE_URL = 'https://pixabay.com/api/';

//     const url = fetch(hits)(
//       `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=1&per_page=10&key=${API_KEY}`,
//     )
//       .then(r => r.json())
//       .then(hits => {
//         const markup = photoCardTemplate(hits);
//         refs.galleryContainer.innerHTML = markup;
//       })

//       .catch(error => {
//         console.log(error);
//       });
//   }
//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
