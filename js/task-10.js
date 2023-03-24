function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  amountOfBoxes: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[data-create]"),
  removeBtn: document.querySelector("button[data-destroy]"),
  refToBoxes: document.querySelector("#boxes"),
};
refs.createBtn.addEventListener("click", () => {
  createBoxesElements(Number(refs.amountOfBoxes.value));
});
refs.removeBtn.addEventListener("click", () => {
  refs.refToBoxes.innerHTML = "";
});

function createBoxesElements(amount) {
  const widthHeigth = 30;
  let allBoxElementsInHTML = "";
  for (let i = 0; i < amount; i += 1) {
    let backgroundColorOfBoxInHTML = getRandomHexColor();
    let oneBoxElementInHTML = `<div class = 'box-element' 
    style = 'background-color:${backgroundColorOfBoxInHTML};
     width:${widthHeigth + i * 10}px; height:${widthHeigth + i * 10}px;'></div>`;
    allBoxElementsInHTML += oneBoxElementInHTML;
  }
  refs.refToBoxes.insertAdjacentHTML("beforeend", allBoxElementsInHTML);
}