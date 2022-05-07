const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul");
const ingredientsArray = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  ingredientsArray.push(item);
});

ingredientsList.append(...ingredientsArray);