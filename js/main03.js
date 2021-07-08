const h1DOM = document.querySelector(".recept");
h1DOM.classList.add("simba");

const allIngredientsDOM = document.querySelectorAll('.visi');

for (let i = 0; i < allIngredientsDOM.length; i++) {
    const item = allIngredientsDOM[i];
    item.classList.add("darzove")
}
