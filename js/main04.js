const h1DOM = document.querySelector(".recept1");
h1DOM.innerText = "Zuikio darzas";

const allDOM = document.querySelectorAll('.visi1');

for (let i = 0; i < allDOM.length; i++) {
    const item = allDOM[i];
    item.innerText = "Israuta darzove";
}
