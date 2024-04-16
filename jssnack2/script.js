// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Creo l'array con i team di calcio
const teams = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juve",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Palermo",
        puntiFatti: 0,
        falliSubiti: 0
    }
]

// Creo un ciclo for each
// Per ogni object dell'array
teams.forEach((curTeam) => {
    // assegno un valore randomico tramite la funzione per la generazione del numero randomico
    curTeam.puntiFatti = getRndInteger(0, 50);
    curTeam.falliSubiti = getRndInteger(0, 50);
});
// log alla console. Il log mostra tutti gli elementi dell'array con i valori sostitutiti
console.log(teams);

// Creo la funzione per la generazione di numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creo un nuovo array con solo i nomi e i falli subiti
const newTeams = teams.map((curTeam) => {
    const { nome, falliSubiti } = curTeam;
    return {
        nome,
        falliSubiti
    }
})
// Log alla console
console.log(newTeams);
