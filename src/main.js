import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();
    
    if (!query) {
        iziToast.warning({ title: 'Warning', message: 'Please enter a search term!' });
        return;
    }
    
    gallery.innerHTML = '';
    loader.style.display = 'block';
    
    try {
        const images = await fetchImages(query);
        if (images.length === 0) {
            iziToast.error({ title: 'Error', message: 'Sorry, there are no images matching your search query. Please try again!' });
        } else {
            renderImages(images);
        }
    } catch (error) {
        iziToast.error({ title: 'Error', message: 'Something went wrong. Please try again later.' });
    }
    
    loader.style.display = 'none';
    form.reset();
});