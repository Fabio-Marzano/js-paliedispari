PROBLEMA 1
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma

SOLUZIONE 
1- Consento l'inserimento della parola da parte dell'utente tramite prompt.
2-Prendo la parola inserita dall'utente, la suddivido in lettere e ne inverto l'ordine.
3-Attivo una funzione senza parametro con effetto di ritorno contenente una stringa.
4-Avvio ciclo for
5-? SE la parola inserita e' palindroma non commetto azioni. 
ALTRIMENTI: creo una variabile in cui scrivo che la stringa non e' polindroma.
6-Avvio condizione di fine ciclo.

PROBLEMA 2 
PARI E DISPARI 
L'utente inserisce prima 'pari' o 'dispari' poi inserisce un unmero da 1 a 5. Generiamo un numero random (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiaro chi ha vinto. 


SOLUZIONE 2
1-Stabilisco la funzione generateRandomNumber. 
2-Restituisco il valore generato attivando le funzioni Math.floor, Math.random.
3-Assegno la funzione checkEverOrOdd.
4-Controllo che l'operatore resto sia pari a zero.
5-? SE è zero restituisco true.
6- ALTRIMENTI: retsituisco false.
7- Assegno una variabile che contiene il valore di pari o dispari inserito dall'utente.
8- Assegno variabile con un valore compreso tra 1 e 5 inserito dall'utente.
9- Assegno una variabile che contiene la somma dei due numeri.
10- Attivo la funzione attribuendogli il valore contenuto nella variabile somma.
11-Controllo il valore che viene restituito.
12- ?SE è true allora è pari. 
13-ALTRIMENTI: è dispari. 
14- ? SE il valore inserito come stringa è lo stesso restituito dalla funzione allora ho vinto. 
15-ALTRIMENTI: ho perso. 