import { offerContent } from './offerArray.js';

const types = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const mapCanvas = document.querySelector('#map-canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');
const offerFragment = document.createDocumentFragment();


offerContent.slice(0,1).forEach((data) => {
  const userOffer = offerTemplate.cloneNode(true);
  userOffer.querySelector('.popup__title').textContent = data.offer.title;
  userOffer.querySelector('.popup__text--address').textContent = data.offer.adress;
  userOffer.querySelector('.popup__text--price').textContent = `${data.offer.price}₽/ночь`;
  userOffer.querySelector('.popup__type').textContent = types[data.offer.type];
  userOffer.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  userOffer.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до${data.offer.checkout}`;
  userOffer.querySelector('.popup__features').alt = data.offer.features;
  const offerDescription = userOffer.querySelector('.popup__description').textContent = data.offer.description;
  userOffer.querySelector('.popup__photos').querySelector('.popup__photo').src = data.offer.photos;
  userOffer.querySelector('.popup__avatar').src = data.author.avatar.avatar.length === 0 ? 'img/avatars/default.png' : data.author.avatar.avatar;
  if (data.offer.description === '') {
    offerDescription.classList.add('hidden');
  }
  offerFragment.append(userOffer);
});

mapCanvas.append(offerFragment);