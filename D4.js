/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


function area (l1 = 5, l2 = 10) {
    let moltiplicatoreLati = 2
    areaTotale = l1 * moltiplicatoreLati + l2 * moltiplicatoreLati
    return areaTotale
}

console.log(area())


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


//OPZIONE1
function crazySum (a = 2, b = 3) {
    return a + b
}

function crazySum1 (a = 3, b = 3) {
    return (a + b) * 3 
}

console.log(crazySum(), crazySum1())


//OPZIONE2
function crazySum3 (a,b) {
    if (a === b){
        return (a + b) *3 
    }
    else {
        return a + b
    }
     
}
let numA = parseInt(prompt("inserisci due numero a"))
let numB = parseInt(prompt("inserisci due numero b"))
let risultato = crazySum3(numA, numB)

console.log(`il risultato è ${risultato}`)


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


function crazyDiff (a, b = 19) {
    if (a > b) {
        return(a - b) *3
    }
    else if (a <= b ) {
        return (b - a)
    }
    else {
        return ("scusa non ho capito quale numero hai inserito")
    }
}

numA = parseInt(prompt("inserisci un numero"))
risultato = crazyDiff(numA)

console.log(`il risultato è ${risultato}`)


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


function boundary (n) {
    if (n === 400){
        return true
    }
    else if (n > 20 && n < 100) {
        return true
    }
    else {
        return false
    }
}

numA = parseInt(prompt("inserisci un numero"))
risultato = boundary(numA)

console.log(`il risultato è ${risultato}`)


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/


function epify(a) {
    let parolaChiave = "EPICODE ";
    
    if (a.startsWith(parolaChiave)) {
      return a;
    } else {
      return parolaChiave + a;
    }
  }
  
  let inputUtente = prompt("Inserisci una stringa");
  risultato = epify(inputUtente);
  
  console.log(`La frase è: ${risultato}`);


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 () {
    
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
