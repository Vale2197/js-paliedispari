/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

/* chiedere una parola all'utente */
let userWord = prompt("inserisci una parola");

/* creare funzione x invertire parola */

/**
 * data una stringa, la converte in un array di caratteri, per poi ristampare la stessa stringa iniziale al contrario;
 * @param {string}; inserire una stringa
 * @returns {string}; ritorna la stessa stringa al contrario;
*/
function reversedWord (string) {
    let reverse = "";

    for (let i = string.length - 1; i >= 0; i--) {
        const element = string[i];
        reverse += element;   
    }

    return reverse;
}

/* faccio in modo che la funzione mi inverta la parola dell user */
let reversed_user_word = reversedWord(userWord);


/* verifico se la parola è palindroma */
if (userWord == reversed_user_word) {
    alert(`la parola che hai inserito, "${userWord}" è palindroma, poichè al contrario è sempre "${reversed_user_word}"`);
}
else {
    alert(`la parola che hai inserito, "${userWord}" non è palindroma, poichè al contrario è "${reversed_user_word}"`);
}