//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const input = document.querySelector("input");
const searchBtn = document.querySelector("button");
const drinkContainer = document.querySelector(".drinkContainer");

searchBtn.addEventListener("click", searchCocktails);

function searchCocktails() {
 const drink = input.value;
 input.value = "";
 drinkContainer.innerHTML = "";

 fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then((res) => res.json())
  .then((data) => {
   const drinkArr = data.drinks;
   console.log(drinkArr[0]);
   drinkArr.forEach((drink) => {
    renderCocktail(drink);
   });
  })
  .catch((err) => console.log(err));
}

function renderCocktail(data) {
 const html = `
  <div class='drink'>
    <h2 class='drinkName'>${data.strDrink}</h2>
    <img class='drinkImg' src="${data.strDrinkThumb}" alt="image of cocktail" />
    <ul class='drinkIngredients'>
      ${data.strIngredient1 ? `<li>${data.strIngredient1}</li>` : ""}
      ${data.strIngredient2 ? `<li>${data.strIngredient2}</li>` : ""}
      ${data.strIngredient3 ? `<li>${data.strIngredient3}</li>` : ""}
      ${data.strIngredient4 ? `<li>${data.strIngredient4}</li>` : ""}
      ${data.strIngredient5 ? `<li>${data.strIngredient5}</li>` : ""}
      ${data.strIngredient6 ? `<li>${data.strIngredient6}</li>` : ""}
      ${data.strIngredient7 ? `<li>${data.strIngredient7}</li>` : ""}
      ${data.strIngredient8 ? `<li>${data.strIngredient8}</li>` : ""}
   </ul>
  </div>
  `;
 drinkContainer.insertAdjacentHTML("beforeend", html);
}
