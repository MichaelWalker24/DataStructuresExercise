// Data Structures Exercise
const jedi=[];

jedi[jedi.length]=`Luke`;
console.log(jedi);
// OR

// jedi[0]='Luke';

jedi.push(`Obi-Wan Kenobi`);
console.log(jedi);

jedi.unshift(`Yoda`)
console.log(jedi);

console.log(jedi[1]);

jedi.splice(2);

// OR
const force=jedi.pop();
console.log(jedi);
console.log(force);

const yoda=jedi.shift()
console.log(jedi);
console.log(yoda);

const sithlords=[
    `Darth Vader`,
    `sarth Sidious`,
    `Darth Maul`
];

const imperialOfficers=[
    `Grand Moff Tarkin`
    `orson Krennic`
];

const starWarsVillians=sithlords.concat(imerialOfficers);

console.log(starWarsVillains.splice(0,2));

const droids={
    astromech: `R2-D2`,
    protocol: `C-3PO`,
    assassin: `IG-88`
}

console.log(droids);

console.log(droids[`astromech`]);

console.log(droids.protocol);

droids.assassin=`IG-11`
console.log(droids.assassin);
console.log(droids);

// BONUS
console.log(starWarsVillains[0].slice(6,7));

console.log(sithLords.slice(-2,-1));

const starWarsMovies=[
    {
        episodeOne:`The Phantom Menace`,
        episodeTwo:`Attack of The Clones`,
        episodeThree:`Revenge of The Sith`
    },
    {
        episodeFour:`A New Hope`,
        episodeFive:`The Empire Strikes Back`,
        episodeSix:`Return of the Jedi`
    },
    {
        episodeSeven:`The Force Awakens`,
        episodeEight:`The Last Jedi`,
        episodeNine:`The Rise of Skywalker`
    }
];

starWarsMovies.splice(1,0,`solo`,`Rouge One`);
console.log(starwarsMovie);