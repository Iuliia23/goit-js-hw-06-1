const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onFormInput);

function onFormInput(event) {
    event.preventDefault();
    outputEl.textContent = event.target.value;

    if (event.target.value === "") {
        outputEl.textContent = "Anonymous";
    }
}