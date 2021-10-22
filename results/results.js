import pokemon from '../data/pokemon.js';
import { getPokedex, findById } from '../utils.js';

const results = getPokedex();
const main = document.getElementById('main');

for (let item of results){
    const poke = findById(item.id, pokemon);
    console.log(item);
    console.log(poke);

    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = poke.url_image;
    const header = document.createElement('h2');
    header.textContent = poke.name;
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Shown: ${item.shown}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Picked: ${item.catch}`;

    div.append(header, img, resultsSpan1, resultsSpan2);
    main.append(div);

} 