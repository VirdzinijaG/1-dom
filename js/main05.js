const h1DOM = document.querySelector(".recept2");
h1DOM.innerText = "Zuikio pomidoru darzas";

h1DOM.classList.add("pavadinimas");


const allDOM = document.querySelectorAll('.visi2');

for (let i = 0; i < allDOM.length; i++) {
    const item = allDOM[i];
    item.innerText = "Pomidoras";
    item.classList.add("pomidoras")
}

