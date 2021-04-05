const getPokemon = async (url) => {

    let pokemon = {
        id: url.id,
        name: url.name,
        img: url.sprites.other.dream_world.front_default,
        types: [],
    }

    let types = url.types
    
    types.map(type => {
        pokemon.types.push(type.type.name)

    })
    
    return pokemon
}
export default getPokemon