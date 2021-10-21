export function getPokedex(){
    const Pokedex = JSON.parse(localStorage.getItem('POKEMON') || '[]');
    return Pokedex;
}

export function catchPokemon(id) {
    const currentPokedex = getPokedex();
    
    const caughtPokemon = currentPokedex.find(pokemon => pokemon.id === id);
    if (caughtPokemon){
        caughtPokemon.picked ++;
    } else {
        const newPokemon = { 'id': id, 'catch': 1, 'shown': 1 };
        currentPokedex.push(newPokemon);
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
        caughtPokemon.shown ++;
    } else {
        const newPokemon = { 'id': id, 'catch': 0, 'shown': 1 };
        currentPokedex.push(newPokemon);
    }
    
    setPokedex(currentPokedex);
}