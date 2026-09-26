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
afficherListe()
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

function afficherListe() {
  console.log("\n--- Liste des candidats ---");

  let choix = prompt("1 : ordre normal / 2 : tri par votes / 3 : filtrer par parti : ");

  if (choix === "1") {
    afficherCandidats(candidats);
  } else if (choix === "2") {
    let copie = [];
    for (let i = 0; i < candidats.length; i++) {
      copie.push(candidats[i]);
    }
    copie.sort(function (a, b) {
      return b.electeurs.length - a.electeurs.length;
    });
    afficherCandidats(copie);
  } else if (choix === "3") {
    let parti = prompt("Quel parti politique ? ");
    let resultat = [];
    for (let i = 0; i < candidats.length; i++) {
      if (candidats[i].partiPolitique === parti) {
        resultat.push(candidats[i]);
      }
    }
    afficherCandidats(resultat);
  } else {
    console.log("Choix invalide !");
  }
}