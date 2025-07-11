// Ajouter le texte saisi à l'historique dans le localStorage
function sauver() {
  var texte = document.getElementById('texte').value.trim();
  if (texte) {
    // Récupérer l'historique existant
    var historique = localStorage.getItem('monTexte') || '';
    // Ajouter le nouveau texte, séparé par une ligne
    if (historique) {
      historique += "\n--------------------\n";
    }
    historique += texte;
    localStorage.setItem('monTexte', historique);
    alert('Texte ajouté à l\'historique !');
    document.getElementById('texte').value = '';
  } else {
    alert('Veuillez saisir un texte avant d\'ajouter.');
  }
}

// Afficher l'historique si l'élément d'affichage existe
window.addEventListener('DOMContentLoaded', function() {
  var affichage = document.getElementById('affichage');
  if (affichage) {
    var texte = localStorage.getItem('monTexte') || '(Aucun texte sauvegardé)';
    affichage.textContent = texte;
  }
});

// Effacer l'historique
function effacer() {
  if (confirm("Voulez-vous vraiment effacer tout l'historique ?")) {
    localStorage.removeItem('monTexte');
    var affichage = document.getElementById('affichage');
    if (affichage) affichage.textContent = '(Aucun texte sauvegardé)';
    alert('Historique effacé !');
  }
}


// Pour la page de modification
window.addEventListener('DOMContentLoaded', function() {
  var editZone = document.getElementById('editZone');
  if (editZone) {
    // Charger l’historique actuel dans la zone d’édition
    editZone.value = localStorage.getItem('monTexte') || '';
  }
});

// Mot de passe défini (à personnaliser)
const MOT_DE_PASSE = "monSecret123";

// Vérification du mot de passe
function verifierMotDePasse() {
  var input = document.getElementById('password').value;
  var erreur = document.getElementById('erreur');
  if (input === MOT_DE_PASSE) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('editContainer').style.display = 'block';
    // Charger l’historique dans la zone d’édition
    document.getElementById('editZone').value = localStorage.getItem('monTexte') || '';
  } else {
    erreur.textContent = "Mot de passe incorrect.";
  }
}

// Fonction pour enregistrer les modifications
function sauverModification() {
  var editZone = document.getElementById('editZone');
  if (editZone) {
    localStorage.setItem('monTexte', editZone.value);
    alert('Modifications enregistrées !');
  }
}
