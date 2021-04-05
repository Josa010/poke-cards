import getPokemon from './getPokemon';
const API = 'https://pokeapi.co/api/v2/pokemon?limit=151'

const getData = async (id) => {

    const apiURL = id ? `https://pokeapi.co/api/v2/pokemon/${id}` : API

    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        
        if(id){
            return data
        }
        else {
            let pokemons = []
            for(let i=0; i<=150; i++){
                const url = await fetch(data.results[i].url)
                .then(response => response.json())
                .catch(err=>console.log(err))
                
                let pokemon = await getPokemon(url)
                pokemons.push(pokemon)
            }
            return pokemons
        }

    } catch (error) {
        console.log('Fetch Error', error)
    }
}


export default getData