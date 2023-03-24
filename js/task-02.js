const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients');

const makeIngredients = options => {
  return options.map(option => {
    const titleEl = document.createElement('li');
    titleEl.textContent = option;
    titleEl.classList.add('item');

    return titleEl;
  });
};

const elements = makeIngredients(ingredients);
ingredientsContainerEl.append(...elements);
console.log(ingredientsContainerEl);