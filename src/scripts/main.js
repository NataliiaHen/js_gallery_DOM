'use strict';

const list = document.querySelectorAll('.list-item');
const largeImg = document.querySelector('#largeImg');
const url = window.location.href;

list.forEach(item => item.querySelector('.list-item__link')
  .addEventListener('click', (e) => {
    e.preventDefault();

    const current = e.currentTarget;

    if (current.tagName === 'A') {
      const link = current.getAttribute('href');

      largeImg.setAttribute('src', `.${link}`);
    }
  }),
);
