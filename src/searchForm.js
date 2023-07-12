import getElement from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = getElement(".search-form");
const input = getElement("[name=drink");

form.addEventListener("keyup", function (e) {
  e.preventDefault();

  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});

const searchForm = () => {};

export default searchForm;