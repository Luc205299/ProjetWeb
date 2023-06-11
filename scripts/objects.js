var produit1 = {
    id: 1,
    nom: "Black Octane",
    prix: 1500,
    quantite: 1
  };

var produit2 = {
    id: 2,
    nom: "Chantico",
    prix: 1100,
    quantite: 1
};

var produit3 = {
    id: 3,
    nom: "Jacana",
    prix: 2000,
    quantite: 1
};

var produit4 = {
    id: 4,
    nom: "Viled",
    prix: 2000,
    quantite: 1
};

var produit5 = {
    id: 5,
    nom: "Demonio",
    prix: 2000,
    quantite: 1
};

var produit6 = {
    id: 6,
    nom: "White Octane",
    prix: 5000,
    quantite: 1
};

var produit7 = {
    id: 7,
    nom: "Lunation",
    prix: 2000,
    quantite: 1
};

var produit8 = {
    id: 8,
    nom: "Glitterati",
    prix: 2000,
    quantite: 1
};

var produit9 = {
    id: 9,
    nom: "Black Fennec",
    prix: 1500,
    quantite: 1
};

var produit10 = {
    id: 10,
    nom: "Huntress",
    prix: 2200,
    quantite: 1
};

var produit11 = {
    id: 11,
    nom: "Founder",
    prix: 2000,
    quantite: 1
};

var produit12 = {
    id: 12,
    nom: "White Fennec",
    prix: 3500,
    quantite: 1
};

var produit13 = {
    id: 13,
    nom: "Stride Tide",
    prix: 2500,
    quantite: 1
}; 

var produit14 = {
    id: 14,
    nom: "Dieci",
    prix: 700,
    quantite: 1
};

var produit15 = {
    id: 15,
    nom: "Ombre",
    prix: 1200,
    quantite: 1
};

var produit16 = {
    id: 16,
    nom: "Ecto-1 BK",
    prix: 1200,
    quantite: 1
};

var produit17 = {
    id: 17,
    nom: "Black Dominus",
    prix: 1500,
    quantite: 1
};

var produit18 = {
    id: 18,
    nom: "CRL eastern",
    prix: 2000,
    quantite: 1
};

var produit19 = {
    id: 19,
    nom: "Astro-CSK",
    prix: 1300,
    quantite: 1
};

var produit20 = {
    id: 20,
    nom: "White Dominus",
    prix: 3500,
    quantite: 1
};

var produit21 = {
    id: 21,
    nom: "K2",
    prix: 2500,
    quantite: 1
};

 //script panier 

// var btnAjouterPanier = document.getElementsByClassName("btnAjouterPanier");
// btnAjouterPanier.addEventListener("click", ajouterAuPanier);
//  
// function ajouterAuPanier(produit) {
//     var panier = localStorage.getItem("panier");
//     if (panier) {
//         // Si le panier existe, le convertir en objet JavaScript
//         panier = JSON.parse(panier);
//     } else {
//         // Si le panier n'existe pas, initialiser un tableau vide
//         panier = [];
//     }
//     // Ajouter le produit au panier
//     panier.push(produit);
//     localStorage.setItem("panier", JSON.stringify(panier));
//     alert("Produit ajouté au panier");
//     }
    

function SuppPanier() {
    localStorage.removeItem("panier");
    alert("Panier supprimé");
    panier = [];
    localStorage.setItem("panier", JSON.stringify(panier));
    window.location.reload();
}

function ajouterAuPanier(produit) {
    console.log(produit);
    var panier = localStorage.getItem("panier");
    if (panier) {
        // Si le panier existe, le convertir en objet JavaScript
        panier = JSON.parse(panier);
    } else {
        // Si le panier n'existe pas, initialiser un tableau vide
        panier = [];
        console.log(produit+"ff");
    }
    // Ajouter le produit au panier
    for(var i = 0; i < panier.length; i++){
        if(panier[i].id == produit.id){
            panier[i].quantite++;
            localStorage.setItem("panier", JSON.stringify(panier));
            alert("Produit ajouté au panier");
            return;
        }
            
                
    }

    panier.push(produit);
                localStorage.setItem("panier", JSON.stringify(panier));
                alert("Produit ajouté au panier");
}