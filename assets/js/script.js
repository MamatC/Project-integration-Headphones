// Récupère tous les éléments ayant la classe CSS "border"
let btn = document.querySelectorAll(".border");

// Boucle sur le tableau des éléments récupérés
btn.forEach((item) => {
  // "item" correspond à un des éléments du tableau "btn"
  item.addEventListener("click", affCasque);
});


function affCasque() {
  // Récupère toutes les images casques
  
  let casques = document.querySelectorAll(".casque");
  casques.forEach((casque) => {
    // Retire la classe "aff" de l'image'
    casque.classList.remove("aff");
  });

  btn.forEach((item) => {
    // "item" correspond à un des éléments du tableau "btn"
    item.classList.remove("color");
  });

  // Récupère la valeur contenue dans l'attribut "data-id"
  // "this" correspond à l'élément ayant enclenché la fonction(ici, tous les .border )
  let id = this.dataset.id;
  console.log(id);
  // Ajoute la classe CSS "aff" et change la couleur de la bordure
  document.querySelector(`#image${id}`).classList.add("aff");//ne pas mettre uniquement un chiffre pour l'id(ici on ajoute le mot image(`#image${id}`))
  this.classList.add("color");
}
