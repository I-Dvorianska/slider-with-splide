import './sass/main.scss';
import Splide from '@splidejs/splide';

new Splide('.splide', {
  type: 'loop',
  perPage: 5,
}).mount();

var elms = document.getElementsByClassName('splide');
for (var i = 0, len = elms.length; i < len; i++) {
  new Splide(elms[i]).mount();
}
