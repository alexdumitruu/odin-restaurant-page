import { pageLoad } from './page-load.js';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { contactPage } from './contact.js';

const content = document.querySelector('#content');

console.log("Hello webpack!");

pageLoad();

const homeBtn = document.querySelector('#home-button');
const menuBtn = document.querySelector('#menu-button');
const contactBtn = document.querySelector('#contact-button');

homeBtn.addEventListener('click', () => {
    content.innerHTML = "";
    content.appendChild(homePage())
})

