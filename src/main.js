import { getImage } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from './img/error.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const input = document.querySelector('.user-input').value.trim();
    const gallery = document.querySelector('.gallery');

    if (input === '') {
        return;
    }

    gallery.innerHTML = '<p>Loading images, please wait...</p><span class="loader"></span>';

    getImage(input)
        .then(response => galleryMarkup(response))
        .catch(error => {
            iziToast.show({
                messageColor: '#FAFAFB',
                messageSize: '16px',
                backgroundColor: '#EF4040',
                iconUrl: errorIcon,
                transitionIn: 'bounceInLeft',
                position: 'topRight',
                displayMode: 'replace',
                closeOnClick: true,
                message: 'Something went wrong. Please, try again.',
            });
            gallery.innerHTML = '';
            console.log(error);
        });
}