
// ASSIGNMENT #2

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// step#1 

const list = document.querySelector("#ingredients");

// step#2

const title = document.createElement('h2');
title.textContent = "Ingredients:";
list.before(title);


const elems = ingredients.map(ingredient => {
  const ingredientItem = document.createElement("li"); // step#4
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add("item"); // step#3
  return ingredientItem;
});

list.append(...elems);

console.log(list);

