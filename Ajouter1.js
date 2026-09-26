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
ajouterCandidat()

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