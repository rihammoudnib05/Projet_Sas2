const prompt = require('prompt-sync')();

let candidats = [];

function ajouterCandidat() {
  console.log("\n--- Ajouter un candidat ---");

  let cin = prompt("CIN du candidat : ");

  let existe = false;
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === cin) {
      existe = true;
    }
  }

  if (existe === true) {
    console.log("Erreur : ce CIN existe deja !");
    return;
  }

  let nom = prompt("Nom : ");
  let prenom = prompt("Prenom : ");
  let parti = prompt("Parti politique (ou Independant) : ");
  let ageText = prompt("Age : ");
  let age = Number(ageText);

  if (age < 18) {
    console.log("Erreur : l'age doit etre 18 ans ou plus !");
    return;
  }

  let nouveauCandidat = {
    cin: cin,
    nom: nom,
    prenom: prenom,
    partiPolitique: parti,
    age: age,
    electeurs: []
  };

  candidats.push(nouveauCandidat);

  console.log("Le candidat " + nom + " a ete ajoute !");
}

ajouterCandidat();

function ajouterPlusieursCandidats() {
  console.log("\n--- Ajouter plusieurs candidats ---");

  let nombreText = Number(prompt("Combien de candidats voulez-vous ajouter ? "));
  for (let i=0; i<nombreText;i++ ){
    console.log ("nouveu candidat")
    ajouterCandidat()
  }

  if (nombre <= 0) {
    console.log("Nombre invalide !");
    return;
  }

  for (let i = 1; i <= nombre; i++) {
    console.log("\nCandidat numero " + i + " :");
    ajouterCandidat();
  }
}
ajouterPlusieursCandidats();
