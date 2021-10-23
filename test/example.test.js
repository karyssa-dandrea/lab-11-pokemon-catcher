import pokemon from '../data/pokemon.js';
import { getPokedex, catchPokemon, seenPokemon, setPokedex, findById } from '../utils.js';
const test = QUnit.test;

test('making sure the get Pokedex function is working properly', (expect) => {
    const mockPokedex = [
        { id: '1', shown: 3, picked: 1 },
        { id: '3', shown: 5, picked: 0 }
    ];

    localStorage.setItem('POKEMON', JSON.stringify(mockPokedex));
    const actual = getPokedex();
    expect.deepEqual(mockPokedex, actual);
});

test('catchPokemon should increment the quantity by 1', (expect)=>{
    // arrange
    const mockPokedex = [
        { id: '1', shown: 3, catch: 1 },
        { id: '3', shown: 5, catch: 0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockPokedex));
    
    const expected = [
        { id: '1', shown: 3, catch: 2 },
        { id: '3', shown: 5, catch: 0 }
    ];
    catchPokemon('1');

    const actual = getPokedex();
    expect.deepEqual(actual, expected);
});

test('seenPokemon making sure the add shown increments by 1', (expect)=>{
    // arrange
    const mockPokedex = [
        { id: '1', shown: 3, picked: 1 },
        { id: '3', shown: 5, picked: 0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockPokedex));
    
    const expected = [
        { id: '1', shown: 4, picked: 1 },
        { id: '3', shown: 5, picked: 0 }
    ];
    seenPokemon('1');

    const actual = getPokedex();
    expect.deepEqual(actual, expected);
});

test('making sure setPokedex is working well', (expect) =>{
    const expected = [
        { id: 1, shown: 3, catch: 1 },
        { id: 3, shown: 5, catch: 0 }
    ];
    setPokedex(expected);
    const actual = getPokedex();
    expect.deepEqual(actual, expected);
});

test('findById should return the item matching the ID', (expect) => {
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    const actual = findById(1, pokemon);
    expect.deepEqual(actual, expected);
});