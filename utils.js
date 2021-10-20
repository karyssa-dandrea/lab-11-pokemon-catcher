export function getResults(){
    const results = JSON.parse(localStorage.getItem('POKEMON') || '[]');
    return results;
}

export function catchPokemon(id) {
    const currentResults = getResults();
    
    const caughtPokemon = currentResults.find(pokemon => pokemon.id === id);
    console.log(caughtPokemon);
    caughtPokemon.picked ++;
    setResults(currentResults);
    
}

export function setResults(pokemon){
    const stringyResults = JSON.stringify(pokemon);
    localStorage.setItem('POKEMON', stringyResults);
}