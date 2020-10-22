'use strict';

var mainNav = document.querySelector('.main-nav');
var toggleNav = document.querySelector('.main-nav__toggle');
var body = document.querySelector('.body');
var linksMenu = document.querySelectorAll('.main-nav__item-link');

function changeStateMenu() {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
}

if (mainNav && toggleNav) {
  mainNav.classList.remove('main-nav--nojs');

  toggleNav.onclick = function () {
    changeStateMenu();
    body.classList.toggle('body__js-menu');
  };

  linksMenu.forEach(function (item) {
    item.onclick = function () {
      changeStateMenu();
      body.classList.remove('body__js-menu');
    };
  });

  changeStateMenu();
}
