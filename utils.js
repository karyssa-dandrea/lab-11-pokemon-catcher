export function getResults(){
    const results = JSON.parse(localStorage.getItem('POKEMON') || '[]');
    return results;
}