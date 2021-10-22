import pokemon from '../data/pokemon.js';
import { getPokedex, findById } from '../utils.js';

const results = getPokedex();
const main = document.getElementById('main');

for (let item of results){
    const poke = findById(item.id, pokemon);


    const div = document.createElement('div');
    div.classList.add('divv');
    const img = document.createElement('img');
    img.src = poke.url_image;
    const header = document.createElement('h2');
    header.textContent = poke.name;
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Shown: ${item.shown} `;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Picked: ${item.catch}`;

    div.append(header, img, resultsSpan1, resultsSpan2);
    main.append(div);

} 

const names = results.map((item)=>{
    const pokemonId = findById(item.id, pokemon);
    return pokemonId.pokemon;
});

const catchPoke = results.map(item=>item.catch);

const shown = results.map(item=>item.shown);

var ctx = document.getElementById('resultsChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of Times Picked',
            data: catchPoke, 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }, {
            type: 'bar',
            label: '# of Times Shown',
            data: shown, 
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }],
    }, 
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});