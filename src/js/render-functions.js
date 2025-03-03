import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function galleryMarkup(data) {
    const hits = data.data.hits;
    const gallery = document.querySelector('.gallery');

    if (hits.length === 0) {
        iziToast.show({
            messageColor: '#FAFAFB',
            messageSize: '16px',
            backgroundColor: '#EF4040',
            iconUrl: errorIcon,
            transitionIn: 'bounceInLeft',
            position: 'topRight',
            displayMode: 'replace',
            closeOnClick: true,
            message: 'Sorry, there are no images matching your search query. Please, try again!',
        });
        gallery.innerHTML = '';

        return;
    }

    const markup = hits
        .map(
            image =>
                `<li class='gallery-item'>
                    <a class='gallery-link' href="${image.largeImageURL}">
                        <img class='gallery-img' src="${image.webformatURL}" alt="${image.tags}" />
                        <div class="grid">
                            <p>Likes</p>
                            <p>Views</p>
                            <p>Comment</p>
                            <p>Downloads</p>
                            <span>${image.likes}</span>
                            <span>${image.views}</span>
                            <span>${image.comments}</span>
                            <span>${image.downloads}</span>
                        </div>
                    </a>
                </li>`
        )
        .join(' ');

    gallery.innerHTML = markup;

    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh();
}