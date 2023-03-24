function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColorEl = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', function onClick(event)
{
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  return backgroundColorEl.textContent = randomColor;
})