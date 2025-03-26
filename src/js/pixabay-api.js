import axios from 'axios';

const API_KEY = '49113920-f9af0cc3a936c3f1f6e808981';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchPixabay(searchQuery) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}