// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.


const persone = [
    { nome: 'Marco', cognome: 'Rossi', età: 25 },
    { nome: 'Anna', cognome: 'Verdi', età: 17 },
    { nome: 'Luca', cognome: 'Bianchi', età: 30 },
    { nome: 'Giulia', cognome: 'Neri', età: 15 }
  ];
  
  const frasi = persone.map(persona => {
    return `${persona.nome} ${persona.cognome} ${persona.età >= 18 ? 'può guidare.' : 'non può guidare.'}`;
  });
  
  console.log(frasi);