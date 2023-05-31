var produit0 = {
    id: 1,
    nom: "Interstellar",
    prix: 2000,
    quantite: 1
  };

var produit2 = {
    id: 2,
    nom: "Inception",
    prix: 500,
    quantite: 1
};

var produit3 = {
    id: 3,
    nom: "Dunkirk",
    prix: 200,
    quantite: 1
};

var produit4 = {
    id: 4,
    nom: "The Dark Knight",
    prix: 1000,
    quantite: 1
};

var produit5 = {
    id: 5,
    nom: "The Dark Knight ",
    prix: 1000,
    quantite: 1
};

var produit6 = {
    id: 6,
    nom: "Begins",
    prix: 1000,
    quantite: 1
};

var produit7 = {
    id: 7,
    nom: "The Prestige",
    prix: 800,
    quantite: 1
};

var produit8 = {
    id: 8,
    nom: "Octane",
    prix: 500,
    quantite: 1
};

var produit9 = {
    id: 9,
    nom: "Fennec",
    prix: 500,
    quantite: 1
};

var produit10 = {
    id: 10,
    nom: "Dominus",
    prix: 500,
    quantite: 1
};

var produit11 = {
    id: 11,
    nom: "Bat",
    prix: 5000,
    quantite: 1
};

var produit12 = {
    id: 12,
    nom: "Maverick",
    prix: 500,
    quantite: 1
};

//on arrete avec les voitures copilot

var produit13 = {
    id: 13,
    nom: "Fire God",
    prix: 700,
    quantite: 1
}; 

var produit14 = {
    id: 14,
    nom: "Mainframe",
    prix: 700,
    quantite: 1
};

 //script panier 

// var btnAjouterPanier = document.getElementsByClassName("btnAjouterPanier");
// btnAjouterPanier.addEventListener("click", ajouterAuPanier);
 
function ajouterAuPanier(produit) {
    var panier = localStorage.getItem("panier");
    if (panier) {
        // Si le panier existe, le convertir en objet JavaScript
        panier = JSON.parse(panier);
    } else {
        // Si le panier n'existe pas, initialiser un tableau vide
        panier = [];
    }
    // Ajouter le produit au panier
    panier.push(produit);
    localStorage.setItem("panier", JSON.stringify(panier));
    alert("Produit ajouté au panier");
}
