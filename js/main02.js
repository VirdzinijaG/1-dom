const allIngredientsDOM = document.querySelectorAll('li');
let a = [];

// pereinama per sarasa
for (let i = 0; i < allIngredientsDOM.length; i++) {
  const item = allIngredientsDOM[i];
  // su innerText isgaunam reiksme
  const itemName = item.innerText;
  console.log(itemName);
  // ketimas zodziu i didziasias raides
  const nameInUpperCase = itemName.toUpperCase();
//   console.log(nameInUpperCase);
a.push(nameInUpperCase);
}
console.log(a);
