
import { getResults, catchPokemon } from '../utils.js';
const test = QUnit.test;

test('making sure the get results function is working properly', (expect) => {
    const mockResults = [
        { id: '1', shown: 3, picked: 1 },
        { id: '3', shown: 5, picked: 0 }
    ];

    localStorage.setItem('POKEMON', JSON.stringify(mockResults));
    const actual = getResults();
    expect.deepEqual(mockResults, actual);
});

test('catchPokemon should increment the quantity if item in cart', (expect)=>{
    // arrange
    const mockResults = [
        { id: '1', shown: 3, picked: 1 },
        { id: '3', shown: 5, picked: 0 }
    ];
    localStorage.setItem('POKEMON', JSON.stringify(mockResults));
    
    const mockResults2 = [
        { id: '1', shown: 3, picked: 1 },
        { id: '3', shown: 5, picked: 1 }
    ];
    catchPokemon('3');

    const actual = getResults();
    expect.deepEqual(mockResults2, actual);
});