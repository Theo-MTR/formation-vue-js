/**

 Exercice : Trouver la fréquence des mots dans une phrase

 Objectif :
 Écrire une fonction qui prend en entrée une chaîne de caractères et qui retourne un objet où les clés sont les mots de la phrase et les valeurs sont le nombre de fois où ces mots apparaissent.

 Consignes :

 Convertir la phrase en tableau de mots.
 Utiliser la méthode .reduce() pour compter la fréquence des mots.
 Retourner l'objet avec les fréquences.

 ex: la pomme est rouge et la banane est jaune
 {
 "la": 2,
 "pomme": 1,
 "est": 2,
 "rouge": 1,
 "et": 1,
 "banane": 1,
 "jaune": 1
 }

 */

const countWords = (sentence) => {
  const words = sentence.split(' ');
  return words.reduce((obj, word) => {
    obj[word] = (obj[word] || 0) + 1;
    return obj;
  }, {});
};
console.log(countWords("la pomme est rouge et la banane est jaune"));

let obj = {
  "pommes": 3,
  "bananes": 1,
  "cerises": 8
};

/**
 Exercice : Trier un objet par valeur

 Objectif :
 Écrire une fonction qui prend en entrée un objet et qui retourne un nouvel objet dont les propriétés sont triées en fonction de leurs valeurs, en ordre croissant.

 exemple:
 {
 "pommes": 3,
 "bananes": 1,
 "cerises": 8
 };

 ->

 {
 "bananes": 1,
 "pommes": 3,
 "cerises": 8
 }

 */

const sortObjectByValue = (obj) => {
  return Object.fromEntries(
      Object.entries(obj).sort((a, b) => a[1] - b[1])
  );
};
console.log(sortObjectByValue(obj));
module.exports = {countWords, sortObjectByValue};