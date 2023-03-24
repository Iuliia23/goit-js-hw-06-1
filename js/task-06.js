const nameInput = document.querySelector("#validation-input");
nameInput.addEventListener("blur", (event) => {
    let text = event.target.value;
    if (text.length === Number(nameInput.dataset.length)) {
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
    }
    else {
        nameInput.classList.remove("valid");
        nameInput.classList.add("invalid");
    }
    console.log(text.length);
    });


      