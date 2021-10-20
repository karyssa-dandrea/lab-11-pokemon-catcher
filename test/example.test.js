
import { getResults } from '../utils.js';
const test = QUnit.test;

test('making sure the get results function is working properly', (expect) => {
    const mockResults = [
        { id: '1', qty: 3 },
        { id: '3', qty: 4 }
    ];

    localStorage.setItem('POKEMON', JSON.stringify(mockResults));
    const actual = getResults();
    expect.deepEqual(mockResults, actual);
});
