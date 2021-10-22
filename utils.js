export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}


export function getPokedex(){
    const Pokedex = JSON.parse(localStorage.getItem('POKEMON') || '[]');
    return Pokedex;
}

export function catchPokemon(id) {
    const currentPokedex = getPokedex();
    
    const caughtPokemon = findById(id, currentPokedex);
    if (caughtPokemon){
        caughtPokemon.catch++;
    }
    
    setPokedex(currentPokedex);
    
}

export function setPokedex(pokemon){
    const stringyPokedex = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', stringyPokedex);
}

export function seenPokemon(id){
    const currentPokedex = getPokedex();
    
    const caughtPokemon = currentPokedex.find(pokemon => pokemon.id === id);
    
    if (caughtPokemon){
        caughtPokemon.shown++;
    } else {
        const newPokemon = { 'id': id, 'catch': 0, 'shown': 1 };
        currentPokedex.push(newPokemon);
    }
    
    setPokedex(currentPokedex);
}