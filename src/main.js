import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPixabay } from './js/pixabay-api';
import { populateGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';

const pixabayRefs = {
  form: document.querySelector('.form'),
  searchQueryInput: document.querySelector('.form-input'),
  imagesContainer: document.querySelector('.gallery'),
  button: document.querySelector('.form-button'),
  loader: document.querySelector('.loader'),
};

pixabayRefs.form.addEventListener('submit', event => {
  event.preventDefault();
  const searchQuery = pixabayRefs.searchQueryInput.value.trim();
  if (!searchQuery) {
    iziToast.error({
      messageColor: '#FAFAFB',
      iconUrl: './img/bi_x-octagon.svg',
      iconColor: 'white',
      message: 'Please enter a search word!',
      position: 'topRight',
      backgroundColor: '#ef4040',
      color: '#fafafb',
    });
    return;
  }
  clearGallery();

  pixabayRefs.loader.style.display = 'inline-block';

  fetchPixabay(searchQuery)
    .then(response => {
      if (response.hits.length === 0) {
        
        throw new Error('No images found for this query');
      }
      populateGallery(response.hits); 
    })
    .catch(error => {
      iziToast.error({
        messageColor: '#FAFAFB',
        iconUrl: './img/bi_x-octagon.svg',
        iconColor: 'white',
        message:
          'Sorry, there are no images matching</br> your search query. Please, try again!',
        position: 'topRight',
        backgroundColor: '#ef4040',
        color: '#fafafb',
      });
    })
    .finally(() => {
      pixabayRefs.loader.style.display = 'none';
    });
});