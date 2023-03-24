

const textInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
  textOutput.style.fontSize = event.currentTarget.value + 'px';
});