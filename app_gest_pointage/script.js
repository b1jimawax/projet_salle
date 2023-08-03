// Tableau pour stocker les présences
let presences = [];

// Fonction pour gérer la soumission du formulaire
document.getElementById("pointageForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Récupérer les valeurs saisies
    let nom = document.getElementById("nom").value;
    let heureArrivee = document.getElementById("heureArrivee").value;
    
    // Ajouter la présence au tableau
    presences.push({ nom: nom, heureArrivee: heureArrivee });
    
    // Mettre à jour les rapports
    updateRapports();

    // Réinitialiser le formulaire
    document.getElementById("pointageForm").reset();
});

// Fonction pour mettre à jour les rapports
function updateRapports() {
    let rapportsDiv = document.getElementById("rapports");
    rapportsDiv.innerHTML = "";

    for (let i = 0; i < presences.length; i++) {
        let rapport = document.createElement("p");
        rapport.innerText = `${presences[i].nom} est arrivé(e) à ${presences[i].heureArrivee}`;
        rapportsDiv.appendChild(rapport);
    }
}

// ... (le reste du code reste inchangé) ...

// Fonction pour imprimer les rapports
function imprimerRapports() {
    let rapportsDiv = document.getElementById("rapports").innerHTML;
    let bodyContent = document.body.innerHTML;
    
    // Sauvegarder le contenu actuel de la page dans une variable
    let originalContent = document.body.innerHTML;
    
    // Remplacer le contenu de la page par les rapports
    document.body.innerHTML = rapportsDiv;
    
    // Appeler la fonction d'impression du navigateur
    window.print();
    
    // Restaurer le contenu original de la page
    document.body.innerHTML = bodyContent;
}

// ... (le reste du code reste inchangé) ...

// Fonction pour gérer la soumission du formulaire
document.getElementById("pointageForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Récupérer les valeurs saisies
    let nom = document.getElementById("nom").value;
    
    // Obtenir l'heure actuelle au format "HH:mm"
    let now = new Date();
    let heureArrivee = now.toTimeString().slice(0, 5);
    
    // Ajouter la présence au tableau
    presences.push({ nom: nom, heureArrivee: heureArrivee });
    
    // Mettre à jour les rapports
    updateRapports();

    // Réinitialiser le formulaire
    document.getElementById("pointageForm").reset();
});

