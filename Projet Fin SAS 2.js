const prompt = require("prompt-sync")();
const candidats = [{
    cin: "UV123456",
    nom: "Benali",
    prenom: "Hamza",
    partiPolitique: "Parti A",
    age: 37,
    electeurs: ["EL001", "EL007", "EL012", "EL018"]
  },
  {
    cin: "WX234567",
    nom: "Chraibi",
    prenom: "Aya",
    partiPolitique: "Indépendant",
    age: 31,
    electeurs: ["EL003", "EL009"]
  },
  {
    cin: "YZ345678",
    nom: "Bennasser",
    prenom: "Rayan",
    partiPolitique: "Parti B",
    age: 44,
    electeurs: ["EL002", "EL005", "EL014", "EL019", "EL025"]
  },
  {
    cin: "AA456789",
    nom: "Mekki",
    prenom: "Sara",
    partiPolitique: "Parti C",
    age: 28,
    electeurs: ["EL004", "EL011", "EL021"]
  },
  {
    cin: "BB567890",
    nom: "El Idrissi",
    prenom: "Anas",
    partiPolitique: "Indépendant",
    age: 52,
    electeurs: ["EL006", "EL016"]
  },
  {
    cin: "CC678901",
    nom: "Tahiri",
    prenom: "Meryem",
    partiPolitique: "Parti A",
    age: 39,
    electeurs: ["EL008", "EL013", "EL020", "EL027"]
  },
  {
    cin: "DD789012",
    nom: "Kabbaj",
    prenom: "Ayoub",
    partiPolitique: "Parti B",
    age: 47,
    electeurs: ["EL010", "EL015", "EL023"]
  },
  {
    cin: "EE890123",
    nom: "Mernissi",
    prenom: "Lina",
    partiPolitique: "Indépendant",
    age: 34,
    electeurs: ["EL017", "EL024"]
  },
  {
    cin: "FF901234",
    nom: "Ouazzani",
    prenom: "Zakaria",
    partiPolitique: "Parti C",
    age: 41,
    electeurs: ["EL022", "EL026", "EL030", "EL034"]
  },
  {
    cin: "GG012345",
    nom: "Belkadi",
    prenom: "Nour",
    partiPolitique: "Parti A",
    age: 30,
    electeurs: ["EL028", "EL032"]
  }
];

function ajouterCandidat() {
  console.log("\n--- Ajouter un candidat ---");

  let cin = prompt("CIN du candidat : ");
if(cin.trim() === "")
  {
    console.log("error cin obligatoire");
    return
  }
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

  const nom = prompt("Nom : ");
  const prenom = prompt("Prenom : ");
  let parti = prompt("Parti politique (ou Independant) : ");
  let age = Number(prompt("Age : "));

  if (age > 18 && age<70) {
    console.log("Erreur : l'age doit etre 18 ans ou plus !");
    return;
  }
  let electeurs = []
  let nouveauCandidat = {
    cin: cin,
    nom: nom,
    prenom: prenom,
    partiPolitique: parti,
    age: age,
    electeurs: electeurs
  };

  candidats.push(nouveauCandidat);

  console.log("Le candidat " + nom + " a ete ajoute !");
}

//2

function ajouterPlusieursCandidats() {
  console.log("\n--- Ajouter plusieurs candidats ---");

  let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ? "));

  if (isNaN(nombre) || nombre <= 0) {
    console.log("Nombre invalide !");
    return;
  }

  for (let i = 1; i <= nombre; i++) {
    console.log("\nCandidat numero " + i + " :");
    ajouterCandidat();
  }
}
//3
function afficherListe() {

  console.log("\n--- Liste des candidats ---");
  console.log(`1. list simple.`)
  console.log(`2. trier par votes.`)
  console.log(`3. filtrer par parti politique.`)
  let choix=prompt("Entrer votre choix: ")
  
  if (choix === "1") {

function afficherCandidats(liste) {
  if (liste.length === 0) {
    console.log("Aucun candidat a afficher.");
    return;
  }

  for (let i = 0; i < liste.length; i++) {
    let c = liste[i];
    console.log("\n# Candidat " + (i + 1) + " :");
    console.log("CIN : " + c.cin);
    console.log("Nom : " + c.nom);
    console.log("Prenom : " + c.prenom);
    console.log("Parti : " + c.partiPolitique);
    console.log("Age : " + c.age);
    console.log("Nombre de votes : " + c.electeurs.length);
  }
}
    afficherCandidats(candidats);

  } else if (choix === "2") {

    function triParVotes(candidats) {
  let copie = [...candidats];
  for (i = 0; i < copie.length - 1; i++) {
    for (j = 0; j < copie.length - 1 - i; j++) {
      if (copie[j].electeurs.length < copie[j + 1].electeurs.length) {
        let temp = copie[j];
        copie[j] = copie[j + 1];
        copie[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < copie.length; i++) {
    console.log(
      `${copie[i].nom}, ${copie[i].prenom}. ${copie[i].cin}. ${copie[i].partiPolitique}. ${copie[i].electeurs.length}`,
    );
  }
  return copie;
}

  } else if (choix === "3") {

    function filtrerParParti(candidats) {

  let parti = prompt("Entrer le parti politique : ");
  if(parti.trim() === "")
  {
    parti = "independant";
  }

  let trouve = false;

  for (let i = 0; i < candidats.length; i++) {

    if (candidats[i].partiPolitique.toLowerCase() === parti.toLowerCase()) {

      console.log("\nCandidat :");
      console.log("CIN : " + candidats[i].cin);
      console.log("Nom : " + candidats[i].nom);
      console.log("Prenom : " + candidats[i].prenom);
      console.log("Parti politique : " + candidats[i].partiPolitique);
      console.log("Age : " + candidats[i].age);
      console.log("Nombre de votes : " + candidats[i].electeurs.length);

      trouve = true;
    }
  }

  if (trouve === false) {
    console.log("La partie politique n'existe pas.");
  }
}

    filtrerParParti(candidats);

  } else {

    console.log("Choix invalide !");
  }
}
//4

function voter() {
  console.log("\n--- Voter ---");

  let cinElecteur = prompt("Votre CIN (electeur) : ");
if (cinElecteur.trim() === ""){
    console.log ("error CIN oblegatoire");
    return;
}
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].electeurs.includes(cinElecteur) === true) {
      console.log("Vous avez deja vote et vous n'avez pas le droit de modifier votre vote ni de voter a nouveau");
      return;
    }
  }

  let cinCandidat = prompt("CIN du candidat pour qui vous votez : ");

  let candidatTrouve = null;

  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === cinCandidat) {
      candidatTrouve = candidats[i];
    }
  }

  if (candidatTrouve === null) {
    console.log("Candidat introuvable !");
    return;
  }
if (cinElecteur=== candidatTrouve.sin){
    console.log ("error : un condidat ne peut pas voter pour lui-meme");
    return;
}
  candidatTrouve.electeurs.push(cinElecteur);

  console.log("Vote enregistre pour " + candidatTrouve.nom + " !");
}

//5

function modifierCandidat() {
  console.log("\n--- Modifier un candidat ---");

  let cin = prompt("CIN du candidat a modifier : ");

  let candidatTrouve = null;

  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === cin) {
      candidatTrouve = candidats[i];
    }
  }

  if (candidatTrouve === null) {
    console.log("Candidat introuvable !");
    return;
  }

  console.log("1 : modifier le parti \n 2 : modifier l'age");

  let choix = prompt("Votre choix : ");

  if (choix === "1") {

    let nouveauParti = prompt("Nouveau parti politique : ");

    candidatTrouve.partiPolitique = nouveauParti;

    console.log("Le parti a ete modifie !");

  } else if (choix === "2") {

    let ageText = prompt("Nouvel age : ");
    let nouvelAge = Number(ageText);

    if (nouvelAge < 18) {
      console.log("Erreur : age invalide !");
    } else {
      candidatTrouve.age = nouvelAge;
      console.log("L'age a ete modifie !");
    }

  } else {
    console.log("Choix invalide !");
  }
}




function supprimerCandidat() {
 console.log("\n--- Supprimer un candidat ---");
 let cin = prompt("CIN du candidat a supprimer : ");
  let position = -1;
  for (let i = 0; i < candidats.length; i++) {
   if (candidats[i].cin === cin) {
     position = i;
 }
 }

 if (position === -1) {

 console.log("Candidat introuvable !");
  return;
 }

 candidats.splice(position, 1);

 console.log("Le candidat a ete supprime !");
}


function rechercherCandidat() {

console.log("\n--- Rechercher un candidat ---");

let nomRecherche = prompt("Nom du candidat : ");

 let nomMinuscule = nomRecherche.toLowerCase();
 let resultat = [];

 for (let i = 0; i < candidats.length; i++) {

 let nomCandidat = candidats[i].nom.toLowerCase();

 if (nomCandidat.includes(nomMinuscule) === true) {

 resultat.push(candidats[i]);
}
}

afficherCandidats(resultat);
}




function statistiques() {
console.log("\n--- Statistiques de l'election ---");
 console.log("Nombre total de candidats : " + candidats.length);
 let totalVotes = 0;
 for (let i = 0; i < candidats.length; i++) {
totalVotes = totalVotes + candidats[i].electeurs.length;
}
 console.log("Nombre total de votes : " + totalVotes);
let copie = [];
for (let i = 0; i < candidats.length; i++) {
copie.push(candidats[i]);
}
let change = true;
while (change === true) {
 change = false;
for (let j = 0; j < copie.length - 1; j++) {
if (copie[j].electeurs.length < copie[j + 1].electeurs.length) {
 let temp = copie[j];
 copie[j] = copie[j + 1];
 copie[j + 1] = temp;
change = true;
 }
 }
}
 console.log("Top 3 des candidats :");
  let limite = 3;
if (copie.length < 3) {
 limite = copie.length;
}
for (let i = 0; i < limite; i++) {

 console.log( (i + 1) + " - " + copie[i].nom + " " +copie[i].prenom + " : " + copie[i].electeurs.length + " votes" );
 }
 console.log("Candidats par parti :");
let partisDejaAffiches = [];
 for (let i = 0; i < candidats.length; i++) {
 let parti = candidats[i].partiPolitique;
let existe = false;
for (let j = 0; j < partisDejaAffiches.length; j++) {
if (partisDejaAffiches[j] === parti) {
    existe = true;
 }
}
 if (existe === false) {
 let compteur = 0;
 for (let j = 0; j < candidats.length; j++) {
    if (candidats[j].partiPolitique === parti) {
        compteur = compteur + 1;
 }
 }
  console.log("- " + parti + " : " + compteur + " candidat(s)");
partisDejaAffiches.push(parti);
}
}
}
function afficherMenu() {

 console.log("\n==============================");
 console.log(" GESTION DES ELECTIONS");
 console.log("==============================");
 console.log("1. Ajouter un candidat");
 console.log("2. Ajouter plusieurs candidats");
 console.log("3. Afficher la liste des candidats");
 console.log("4. Voter pour un candidat");
 console.log("5. Modifier un candidat");
 console.log("6. Supprimer un candidat");
 console.log("7. Rechercher un candidat par nom");
 console.log("8. Statistiques de l'election");
 console.log("0. Quitter");
 console.log("==============================");
}
let continuer = true;
while (continuer){
afficherMenu();

 let choix = prompt("Votre choix : ");

 switch (choix) {

 case "1":
 ajouterCandidat();
 break;

 case "2":
 ajouterPlusieursCandidats();
 break;

 case "3":
 afficherListe();
 break;

 case "4":
 voter();
 break;

 case "5":
 modifierCandidat();
 break;
case "6":
supprimerCandidat();
break;
 case "7":
rechercherCandidat();
break;
 case "8":
     statistiques();
break;

 case "0":
console.log("Au revoir!");
 break;

default:
 console.log("Choix invalide!");
 }
}