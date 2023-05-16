// 3 facon de declarer une function

// function bonjour() {
//     console.log('salut');
// }

// const hola = function () {
//     console.log('salut');
// }

// const bonjourno = () => {
//     console.log('salut');
// }

// COMPRENDRE LES FUNCTION UTIISER AVEC DES PARAMETRE

// function bonjour(nom) {
//   console.log("salut" + nom);
// }

// bonjour(" didier");  // Dasn mon consol.log je donne un nom ce qui me donne salut didier
// bonjour(" sami");  // Dasn mon consol.log je donne un nom ce qui me donne salut sami

// function plus(compteur) {
//     compteur++;
//     return compteur;
// }

/**************************************************************************************************************************/

// let compteur = 1;
// compteur = plus(compteur)
// console.log(compteur);

// const tableau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const addition = () => {
//   let somme = 0;
//   for (let i = 0; i < tableau.length; i++) {
//     somme += tableau[i];
//   }

//   return console.log(somme);
// };

// addition();

// console.log(somme);

/**************************************************************************************************************************/

// FUNCTION TROUVER LE PLUS GRAND NOMBRE

// const tab = [12, 45, 78, 64, 45,48,654,61,56,1856,1684,168,1,68,1,65,1,650,6,315065,3,41,05,6,31,065,3, 12, 54, 65, 12, 48, 63];

// // console.log(tab[0]);

// function maxNombre() {
//   let maximum = tab[0];
//   for (let i = 1; i < tab.length; i++) {
//     if (tab[i] > maximum) {
//       maximum = tab[i];
//     }
//   }
//   return console.log(maximum);;
// }
// maxNombre();

/**************************************************************************************************************************/

// FUNCTION TROUVER LE PLUS PETIT NOMNRE

// const tab = [12, 45, 78, 64, 45,48,654,61,56,1856,1684,168,1,68,1,65,1,650,6,315065,3,41,05,6,31,065,3, 12, 0.2, 54, 65, 12, 48, 63];

// // console.log(tab[0]);

// function minNombre() {
//   let minimum = tab[0];
//   for (let i = 1; i < tab.length; i++) {
//     if (tab[i] < minimum) {
//         minimum = tab[i];
//     }
//   }
//   return console.log(minimum);;
// }
// minNombre();

/**************************************************************************************************************************/

//FUNCTION TRoUVER LE NOMBRE DE VOYELLE

// const chaine = "je suis un jeune jouer de brighton et je suis acuellement en mls au los angles galaxies ";

// function compterLEsVoyelle() {
//   let voyelle = "aeiouyAEIOUY";
//   let compteur = 0;
//   let compteurConsonnes = 0;
//   let compteurEspace = 0;

//   for (let i = 0; i < chaine.length; i++) {
//     if (voyelle.includes(chaine[i])) {
//       compteur++;
//     } else if (chaine[i] == " ") {
//       compteurEspace++;
//     } else {
//       compteurConsonnes++;
//     }
//   }
//   return console.log(
//     `Dans ce texte: "${chaine}"Il y a ${compteur} voyelle ${compteurConsonnes} Consonnes et ${compteurEspace} espace`
//   );
// }

// compterLEsVoyelle();

/**************************************************************************************************************************/

// FUNCTION QUI INVERSE LES MAJ ET LE MIN

// let string =
//   "Bonjour mon BravE aveZ Vous DE la MArmelaDE Mon PETioit SaaalOpio";

// function reversLowUpCase() {
//   let newChaine = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase()) {
//       newChaine += string[i].toLowerCase();
//     } else {
//       newChaine += string[i].toUpperCase();
//     }
//   }
//   return console.log(newChaine);
// }

// reversLowUpCase();

/**************************************************************************************************************************/
// FUNCTION QUI ME PERMET D'INVERSé LES MOTS (rikiki tout suis je samy c'est moi amis les salut)

// let chaine = "salut les amis moi c'est samy je suis tout rikiki";

// function reverseWord() {
//   let chainSplit = chaine.split(" ").reverse();
//   let newChaine = "";
//   for (let i = 0; i < chainSplit.length; i++) {
//     newChaine += chainSplit[i] + " ";
//   }
//   return console.log(newChaine);
// }

// reverseWord();

/**************************************************************************************************************************/
// Une fonction qui prend un tableau de chaînes de caractères en entrée et renvoie une nouvelle chaîne contenant toutes les chaînes concaténées, séparées par des virgules.

// const tab = [
//   {
//     string: "salut c'est encore samy ",
//   },
//   {
//     string: "j'aimerai savoir ce que devien le pc ",
//   },
//   {
//     string: "Car j'aimeria bien apprendre si tu vois ce que je veux dire ",
//   },
//   {
//     string: "Apprendre quoi samy ",
//   },
//   {
//     string: "LE javascriptn mon peiti ",
//   },
// ];

// function concatenneesString() {
//   let newChaine = "";
//   for (let i = 0; i < tab.length; i++) {
//     newChaine += tab[i].string;
//     if (i < tab.length - 1) {
//       newChaine += ", ";
//     }
//   }
//     return console.log(newChaine);
// }

// concatenneesString();

/**************************************************************************************************************************/

// FUNCTION QUI ME PERMET DE SAVOIR SI IL Y A BIEN UNE BANANE OU AUTRE

// const panier = ["poire", "pomme", "banane", "cerise", "legume"];

// console.log(panier.includes("banane")); // JUSTE AVEC INCLUDE PAS BESOIN DE FUNCTION

// function inMyPanier(monFruit) {

//   for (let fruit of panier) {
//     if (fruit === monFruit) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(inMyPanier("Banane"));

/**************************************************************************************************************************/
// BOUCLE FOR OF  (itérable = argument tableau string)

// const str = "Je suis au comptoir";
// const chaineSansEspaces = str.replace(/\s/g, "");

// for (let index of chaineSansEspaces) {
//   console.log(`voici chaque lettre separer: ${index}`);
// }

/**************************************************************************************************************************/
// BOUCLE FOR IN  (énumérable = object)

// let monchat = {
//   name: "luffy",
//   race: "siamois",
//   age: 14 + " ans",
// };

// for ( let index in monchat){
//     console.log(`${monchat[index]} ---> ${index}`);
//     console.log(`Mon chat s'apelle ${monchat.name} c'est un ${monchat.race} il a ${monchat.age} `);
// }

/**************************************************************************************************************************/
// INDEXOF() FUNCTION QUI PERMET DE SAVOIR LA POSSITION DE NOTRE ELEMENT DANS UN TSRING OU TABLEAUX

// const panier = ["poire", "pomme", "banane", "cerise", "legume"];

// console.log(panier.indexOf("banane"));

// SI L'éLEMNT N4EST PAS PRENSENT IL RENVERA -1

/**************************************************************************************************************************/
// FUNCTION EN UTILISANT LES PARAMETRE POUR SAVOIR SI LA LETTRE EXCISTE

// const str = "EJ suis un padawan !!";

// function isHear(str, lettre) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === lettre) {
//       return console.log(`Oui il y a un ${lettre}`);
//     }
//   }
//   return console.log(`Non il n'y a pas se ${lettre}`);
// }

// isHear(str, "s");

/**************************************************************************************************************************/
// TROUVER QUEL SALARIES A UN SALAIRE DE PLUS DE 50K

// const salaries = [
//   {
//     name: "jhon",
//     salaire: 2000
//   },
//   {
//     name: "emma",
//     salaire: 100000
//   },
//   {
//     name: "tarik",
//     salaire: 23000
//   },
// ];

// console.log(salaries.find(salaries => salaries.salaire > 50000));

/**************************************************************************************************************************/
// tableau.includes(element); // true / false
// tableau.find((element) => condition); // element / undefined
// tableau.indexOf(element); // index / -1
// tableau.findIndex((element) => condition); // index / -1
/**************************************************************************************************************************/

// UTILISER FILTER() POUR TROUVER ET METTRE DANS DES VARIABLE LES POSITIVE ET NEGATIVE DE MON TABLEAUX NUMBER

// const number = [1, -5, 45, -25, 964, -3, 54, 788];

// const negative = number.filter(nombre => nombre < 0)
// const positive = number.filter(nombre => nombre > 0)

// console.log(negative);
// console.log(positive);

/**************************************************************************************************************************/
// FILTER QUE LE NOMBRE PAIRE ET IMPAIRE

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const paire = number.filter((numbre) => (numbre % 2 == 0));

// console.log(paire);
// console.log(number);

/**************************************************************************************************************************/
// FILTRER TOUT LES PERSONNE AVEC UN SALAIRE DE +- DE 50K

// const salariés = [
//   {
//     name: "boby",
//     salaire: 25000,
//   },
//   {
//     name: "charle",
//     salaire: 35000,
//   },
//   {
//     name: "goerge",
//     salaire: 100000,
//   },
//   {
//     name: "sarah",
//     salaire: 55000,
//   },
// ];

// const filtr = salariés.filter((personne) => personne.salaire > 50000);

// console.log(filtr);

/**************************************************************************************************************************/
// BOUCLE MAPS POUR RENVOIYER DANS CARRE TOUT LES NOMBRE DE NUMBER AU CARRER

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const carres = number.map((index) => index * index);

// console.log(carres);

/**************************************************************************************************************************/
//EXCO
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const carres = number.map((nombre, index) => {
//   if (index % 2 == 1) return 0;

//   return nombre * nombre
// });

// console.log(carres);

/**************************************************************************************************************************/
// ONT UTILISE LA BOUCLE Map()

// const data = [
//   {
//     nom: "john",
//     salaire: 25500,
//   },
//   {
//     nom: "amel",
//     salaire: 5500,
//   },
//   {
//     nom: "richard",
//     salaire: 55000,
//   },
//   {
//     nom: "amed",
//     salaire: 15000,
//   },
//   {
//     nom: "sylvie",
//     salaire: 355000,
//   },
//   {
//     nom: "patoche",
//     salaire: 255000,
//   },
// ];

// const listSaliries = data.map(personne => personne.nom );

// console.log(listSaliries);

/**************************************************************************************************************************/
// CALCULER UNE MOYENNE AVEC REDUCE

// const numbr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// // let resultOfTab = 0;
// // for (let chiffre of numbr) {
// //   resultOfTab += chiffre;
// // }
// // console.log(resultOfTab);

// const moyenne = numbr.reduce((acc, number) => acc + number) / numbr.length;

// console.log(moyenne.toFixed(1));

/**************************************************************************************************************************/
//AUTRE POSIBILITER DE DEFINIR UNE CONST DIRECTEMENT DANS REDUCE AVEC LE CALCUL
// const numbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

// const add = (a, b) => a * b;
// const total = numbr.reduce(add, 100);

// console.log(total);

// const str = "je suis un padaaawannn !";

// // const mots = str.split(" ");

// // console.log(mots.reduce((acc, mot) => acc + " " + mot));
// console.log([...str].reduce((acc, mot) => acc + 1, 0) );


/**************************************************************************************************************************/
// UTILISER REDUCE POUR FAIRE LA MOYENNE


// const ecoleNote = [
//   {
//     matier: "sport",
//     note: 20,
//   },
//   {
//     matier: "angalis",
//     note: 14,
//   },
//   {
//     matier: "francais",
//     note: 6,
//   },
//   {
//     matier: "histoire",
//     note: 12,
//   },
//   {
//     matier: "geo",
//     note: 14,
//   },
//   {
//     matier: "math",
//     note: 5,
//   },
//   {
//     matier: "physique",
//     note: 7,
//   },
//   {
//     matier: "chimie",
//     note: 10,
//   },
//   {
//     matier: "espagnol",
//     note: 8,
//   },
//   {
//     matier: "techno",
//     note: 12,
//   },
// ];

// let moy = ecoleNote.reduce((acc, current) => acc + current.note, 0) / ecoleNote.length;


// console.log(moy);