import presentDrinks from './src/presentDrinks.js';
import getElement from './src/getElement.js';
import './src/searchForm.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

document.querySelectorAll('.menu a').forEach(function (element) {
    element.addEventListener('click', () => {
        const goToSectionElement = getElement(`#${element.getAttribute('class')}`);
        if (goToSectionElement) {
            window.scroll({
                top: goToSectionElement.getBoundingClientRect().top,
                behavior: 'smooth'
            });
        }
    });
});

const element = getElement('.scroll-icon');

element.addEventListener('click', () => {
    window.scrollTo({
        top: getElement('.section-logo').getBoundingClientRect().top,
        behavior: 'smooth'
    });
});

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL);
});
