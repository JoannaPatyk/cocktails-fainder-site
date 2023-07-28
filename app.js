import presentDrinks from './src/presentDrinks.js';
import getElement from './src/getElement.js';
import './src/searchForm.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL);
});

// Functionality for scrolling to the selected menu item

document.querySelectorAll('.menu a').forEach(function (element) {
    element.addEventListener('click', () => {
        const goToSectionElement = getElement(`#${element.getAttribute('class')}`);
        if (goToSectionElement) {
            window.scroll({
                top: goToSectionElement.getBoundingClientRect().top - 40,
                behavior: 'smooth'
            });
        }
    });
});

// Functionality for scrolling to the top of the page

const element = getElement('.scroll-icon');

window.addEventListener('scroll', () => {
    scrollFunction();
});

function scrollFunction() {
    const scrollPosition = window.scrollY;
    element.style.display = scrollPosition > 100 ? 'block' : 'none';
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

element.addEventListener('click', () => {
    window.scrollTo({
        top: getElement('.section-logo').getBoundingClientRect().top,
        behavior: 'smooth'
    });
});
