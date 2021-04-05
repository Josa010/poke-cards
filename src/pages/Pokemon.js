import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Pokemon = async () => {
    const id = getHash()
    const pokemon = await getData(id)
    console.log(pokemon)
    const view = `
        <div class="desc-container">
            <div class="pokemon-container">
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
            </div>
            
            <div class="info-container">
                <div class="info">
                    <span>Heigh: ${pokemon.height}</span>
                    <div class="info-container-types">
                        <span>Types:</span>
                    ${pokemon.types.map(type =>  `
                        <span class="type ${type.type.name}">${type.type.name}</span>
                    `).join('')}
                    </div>
                    <span>Base Stats: </span>
                    <ul>
                        <li><span>HP: ${pokemon.stats[0].base_stat}</span></li>
                        <li><span>Attack: ${pokemon.stats[1].base_stat}</span></li>
                        <li><span>Defense: ${pokemon.stats[2].base_stat}</span></li>
                        <li><span>Special-Attack: ${pokemon.stats[3].base_stat}</span></li>
                        <li><span>Special-Defense: ${pokemon.stats[4].base_stat}</span></li>
                        <li><span>Speed: ${pokemon.stats[5].base_stat}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    return view;
};

export default Pokemon