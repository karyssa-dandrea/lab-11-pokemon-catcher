import pokemon from './data/pokemon.js';
import { catchPokemon, seenPokemon } from './utils.js';

let pokemonOne = document.getElementById('pokemon-1');
let pokemonTwo = document.getElementById('pokemon-2');
let pokemonThree = document.getElementById('pokemon-3');
const bulbImg = document.getElementById('bulb-pic');
const charImg = document.getElementById('char-pic');
const squirtImg = document.getElementById('squirt-pic');
const selectButton = document.getElementById('select');


const generatePokemon = () => {
    let randNum1 = Math.floor(Math.random() * pokemon.length);
    let randNum2 = Math.floor(Math.random() * pokemon.length);
    let randNum3 = Math.floor(Math.random() * pokemon.length);
  // regenerate the number if any of them they match
    while (
        randNum1 === randNum2 || 
    randNum1 === randNum3 || 
    randNum2 === randNum3
    ) {
        randNum1 = Math.floor(Math.random() * pokemon.length);
        randNum2 = Math.floor(Math.random() * pokemon.length);
        randNum3 = Math.floor(Math.random() * pokemon.length);
    }

    const pokemon1 = pokemon[randNum1];
    bulbImg.src = pokemon1.url_image;
    const pokemon2 = pokemon[randNum2];
    charImg.src = pokemon2.url_image;
    const pokemon3 = pokemon[randNum3];
    squirtImg.src = pokemon3.url_image; 
    pokemonOne.value = pokemon1.id;
    pokemonTwo.value = pokemon2.id;
    pokemonThree.value = pokemon3.id;
    seenPokemon(pokemon1.id);
    seenPokemon(pokemon2.id);
    seenPokemon(pokemon3.id);
};

let totalPlays = 0;
generatePokemon();

selectButton.addEventListener('click', () =>{
    const chosenRadio = document.querySelector('input[type=radio]:checked');
 
    if (chosenRadio){
        const chosenId = Number(chosenRadio.value);
        totalPlays++;
        catchPokemon(chosenId);
        if (totalPlays >= 10){
            window.location = './results';
        } else {
            generatePokemon();
        }
    }

});