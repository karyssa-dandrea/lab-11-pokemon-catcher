
import { getPokedex, catchPokemon, seenPokemon, setPokedex } from '../utils.js';
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
        { id: '1', shown: 3, picked: 1 },
        { id: '3', shown: 5, picked: 0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockPokedex));
    
    const expected = [
        { id: '1', shown: 3, picked: 2 },
        { id: '3', shown: 5, picked: 0 }
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