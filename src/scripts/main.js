'use strict';

new Promise((resolve, reject) => {
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
    resolve();
  });
}).then(() => {
  successHandlers();
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Error'));
  }, 3000);
}).catch((e) => {
  const message = `Promise was rejected!`;
  const body = document.querySelector('body');

  body.insertAdjacentHTML(
    'afterbegin',
    `<div class="message error-message">` + message + `</div>`,
  );
});

function successHandlers() {
  const message = `Promise was resolved!`;
  const body = document.querySelector('body');

  body.insertAdjacentHTML(
    'afterbegin',
    `<div class="message">` + message + `</div>`,
  );
}
