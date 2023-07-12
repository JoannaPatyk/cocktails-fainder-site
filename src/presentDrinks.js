import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

const showDrink = async (url) => {
    const data = await fetchDrinks(url);

    const section = await displayDrinks(data);
};

export default showDrink;
