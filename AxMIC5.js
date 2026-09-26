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
modifierCandidat()
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

  console.log("1 : modifier le parti / 2 : modifier l'age");

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