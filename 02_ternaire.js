
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return a > b ? a : b
}
console.log(ternaire(3, 5));
console.log(ternaire(10, 5));
module.exports = ternaire;