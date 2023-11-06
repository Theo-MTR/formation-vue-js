
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 *
 * utilisez new Promise
 */

const sleep = () => new Promise((res) => setTimeout(() => {
    res('done');
}, 2000));

sleep().then((res) => {
    console.log(res);
});
module.exports = {sleep};