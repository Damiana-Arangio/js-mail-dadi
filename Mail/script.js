/*
 TESTO - Mail
 Crea una lista di email di invitati ad una festa.
 Chiedi all’utente la sua email,
 controlla che sia nella lista di chi può accedere,
 stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
 ‼️ Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
 
 Nota: 
 Non è necessario provvedere alla validazione delle email

*/

// DEFINIZIONE VARIABILI

  // Creazione array lista email
  const listaInvitati = [
    "pippo@gmail.com", 
    "pluto@gmail.com" , 
    "paperino@gmail.com", 
    "marco.rossi@gmail.com" ,
    "francescobianchi.gmail.com" ];

    // Flag per tenere traccia dello stato dell'email (trovato - non trovato)
    let emailTrovata = false;


// INPUT: richiesta inserimento email (utente)
const emailUser = prompt("Inserisci la tua email");

// ELABORAZIONE
for (let i = 0; i < listaInvitati.length /* && !notemailTrovata al posto di brak */; i++) {

  if (emailUser === listaInvitati[i]) {
      emailTrovata = true;
      break; // interrompi ciclo
    }

  }

// OUTPUT
if (emailTrovata) {
  alert("✅ Accesso riuscito: Benvenuto alla festa!");
}

else {
  alert("❌ Accesso negato: la tua email non è presente nella lista!");
}

