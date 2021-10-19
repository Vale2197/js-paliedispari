/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

/* faccio un ciclo per fare in modo che l'utente mi scriva o pari o dispari */
 let answer = "";
do {
    answer = prompt("pari o dispari?").toLowerCase();
} while (!controlloAnswer(answer));



/* se è uno dei due valori, procedo con la domanda del num. (che devo verificare che sia da 1 a 5) */
let userNumber = 0;

do {
   userNumber = parseInt(prompt("inserisci num. da 1 a 5"));
} while (!controlloNumUtente(userNumber));



/**
 * funzione che verifica se il dato inserito è stringa "pari" o stringa "dispari"
 * @param {string}; inserire stringa
 * @returns {boolean}; tornerà o vera o falsa
 *  */ 
function controlloAnswer (parametroAnswer) {
    if (parametroAnswer == "pari" || parametroAnswer == "dispari")
    
    {
        
        return true;
    }
    else {
        alert("non hai inserito pari o dispari..")
        return false;
    }     
}
/* /check answer */
alert("numero user: " + userNumber);




/** 
 * faccio funzione x num. random pc 
 * @returns {number}; tornerà un numero intero random da 1 a 5
 * */ 
function numeroPcRandom() {
    let random = Math.floor( Math.random() * 5) + 1;
    return random;
}  
alert("numero pc: " + numeroPcRandom());



/**
 * funzione check num. utente, mi verifica se il numero inserito è compreso tra 1 e 5
 * @param {number}; numero
 * @returns {boolean}; tornerà vero o falso  */ 
function controlloNumUtente (numero) {
    if (numero >= 1 && numero <= 5 ) {
        return true;
    }
    else {
        alert("non hai inserito un num. compreso tra 1 e 5..");
        return false;
    }
}




/** faccio la funzione che mi somma due num. e verifica se il risultato è pari o disp.
 * @param {Number}; deve essere un numero
 * @returns {string}; tornerà una stringa "pari" o "dispari"*/  
function pari_disp (num1, num2) {
    let somma = num1 + num2;

    if (somma % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }

}
console.log(pari_disp(userNumber, numeroPcRandom()));

/* devo dichiarare il vincitore */
if (pari_disp(userNumber, numeroPcRandom()) == answer) {
    alert("you win!");
}
else {
    alert("you lose!");
}

