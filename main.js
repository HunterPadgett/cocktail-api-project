//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const input = document.querySelector("input");
const searchBtn = document.querySelector("button");
const drinkName = document.querySelector("h2");
const drinkImg = document.querySelector("img");
const drinkInstructions = document.querySelector("h3");
const drinkContainer = document.querySelector(".drinkContainer");

drinkName.textContent = "";
drinkInstructions.textContent = "";
searchBtn.addEventListener("click", searchCocktails);

function searchCocktails() {
 const drink = input.value;

 fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then((res) => res.json())
  .then((data) => {
   console.log(data.drinks[0]);
   drinkName.textContent = data.drinks[0].strDrink;
   drinkImg.src = data.drinks[0].strDrinkThumb;
   drinkInstructions.textContent = data.drinks[0].strInstructions;
  })
  .catch((err) => console.log(err));
}
