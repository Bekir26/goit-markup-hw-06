const menuBtnDOM = document.querySelector('.header-nav .menu');
const menuCloseBtnDOM = document.querySelector('.mobile-menu .close');
const mobileMenuDOM = document.querySelector('.mobile-menu');
const modalBtnDOM = document.querySelector('.modal-btn');
const modalCloseBtnDOM = document.querySelector('.modal .close');
const modalDOM = document.querySelector('.modal');

menuBtnDOM.addEventListener('click', _ => mobileMenuDOM.classList.toggle('is-open'));
menuCloseBtnDOM.addEventListener('click', _ => mobileMenuDOM.classList.toggle('is-open'));

modalBtnDOM.addEventListener('click', _ => modalDOM.classList.toggle('is-open'));
modalCloseBtnDOM.addEventListener('click', _ => modalDOM.classList.toggle('is-open'));