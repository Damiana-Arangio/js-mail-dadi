/* 
  Gioco dei dadi
  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
  Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

// Generazione numeri random da 1 a 6
const numGiocatore = Math.floor(Math.random() * 6) + 1;   /* Math.random() * 6) + 1; -> Restituisce un numero intero casuale da 1 a 6
                                                             Math.floor arrotonda per difetto all'intero + vicino
                                                          */
const numComputer = Math.floor(Math.random() * 6) + 1; 

// Stampa numeri generati
console.log("Numero Giocatore: " + numGiocatore + " - Numero Computer: " + numComputer);

if (numGiocatore === numComputer) {
  console.log(numGiocatore + " = " + numComputer + " -> Nessun vincitore!");
}

else if (numGiocatore > numComputer) {
  console.log(numGiocatore + " > " + numComputer + " -> Vince il giocatore!");
}

else {
  console.log(numComputer + " > " + numGiocatore + " -> Vince il computer!");
}