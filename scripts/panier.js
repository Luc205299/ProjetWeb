panier = localStorage.getItem("panier");
panier = JSON.parse(panier);
var prixTotal = 0;

for(var i = 0; i < panier.length; i++){
    const pan = document.getElementById("pan");
    var produit = panier[i];
    console.log(produit);
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td.innerText = produit.nom;
    td2.innerText = produit.quantite;
    td3.innerText = produit.prix;
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    pan.appendChild(tr);

    var total = document.getElementById("prixTotal");
    
    console.log(prixTotal);
    prixTotal += produit.prix * produit.quantite;
    total.innerText = prixTotal;

    
}





