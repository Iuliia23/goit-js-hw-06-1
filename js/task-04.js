const btnDecrementRefs = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRefs = document.querySelector(
  'button[data-action="increment"]',
);
const valueRefs = document.querySelector("#value");

let counterValue = 0;
btnDecrementRefs.addEventListener("click", (event) => {
  counterValue -= 1;
  valueRefs.textContent = counterValue;
});
btnIncrementRefs.addEventListener("click", (event) => {
  counterValue += 1;
  valueRefs.textContent = counterValue;
});







