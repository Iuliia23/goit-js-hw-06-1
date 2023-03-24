const listOfEl = document.querySelectorAll('.item');

const numberOfEl = listOfEl.length;
console.log(`Number of categories: ${numberOfEl}`);


listOfEl.forEach((elem) => {
    const titleEl = elem.firstElementChild.textContent;
    const guantityOfEl = elem.querySelectorAll("li").length;
    console.log(`Category: ${ titleEl }`);
    console.log(`Elements: ${ guantityOfEl }`);
});


