import { pokemon } from './pokemon.js';
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

    pokemonOne = pokemon[randNum1];
    bulbImg.src = pokemonOne['url_image'];
    pokemonTwo = pokemon[randNum2];
    charImg.src = pokemonTwo['url_image'];
    pokemonThree = pokemon[randNum3];
    squirtImg.src = pokemonThree['url_image']; 

};

selectButton.addEventListener('click', () =>{
    generatePokemon();
});