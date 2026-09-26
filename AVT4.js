const prompt = require("prompt-sync")();
const candidats = [{
    cin: "HH123789",
    nom: "Lahlou",
    prenom: "Younes",
    partiPolitique: "Indépendant",
    age: 49,
    electeurs: ["EL029", "EL035", "EL041"]
  },
  {
    cin: "II234890",
    nom: "Boukhris",
    prenom: "Salma",
    partiPolitique: "Parti B",
    age: 36,
    electeurs: ["EL031", "EL038"]
  },
  {
    cin: "JJ345901",
    nom: "Naciri",
    prenom: "Othmane",
    partiPolitique: "Parti C",
    age: 43,
    electeurs: ["EL033", "EL037", "EL044"]
  },
  {
    cin: "KK456012",
    nom: "Zerouali",
    prenom: "Khadija",
    partiPolitique: "Indépendant",
    age: 32,
    electeurs: ["EL036", "EL043"]
  },
  {
    cin: "LL567123",
    nom: "Ait Lahcen",
    prenom: "Ilyas",
    partiPolitique: "Parti A",
    age: 54,
    electeurs: ["EL039", "EL045", "EL048", "EL050"]
  },
  {
    cin: "MM678234",
    nom: "Rahmani",
    prenom: "Wiam",
    partiPolitique: "Parti B",
    age: 27,
    electeurs: ["EL040", "EL047"]
  },
  {
    cin: "NN789345",
    nom: "El Gharbi",
    prenom: "Reda",
    partiPolitique: "Indépendant",
    age: 45,
    electeurs: ["EL042", "EL046", "EL049"]
  },
  {
    cin: "OO890456",
    nom: "Bouzid",
    prenom: "Ikram",
    partiPolitique: "Parti C",
    age: 40,
    electeurs: ["EL051", "EL054"]
  },
  {
    cin: "PP901567",
    nom: "Amrani",
    prenom: "Souad",
    partiPolitique: "Parti A",
    age: 35,
    electeurs: ["EL052", "EL055", "EL058"]
  },
  {
    cin: "QQ012678",
    nom: "Filali",
    prenom: "Mehdi",
    partiPolitique: "Parti B",
    age: 50,
    electeurs: ["EL053", "EL056", "EL057", "EL060"]
  }
];

function voter() {
  console.log("\n--- Voter ---");

  let cinElecteur = prompt("Votre CIN (electeur) : ");

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

  candidatTrouve.electeurs.push(cinElecteur);

  console.log("Vote enregistre pour " + candidatTrouve.nom + " !");
}

voter();