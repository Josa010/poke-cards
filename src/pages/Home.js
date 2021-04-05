import getData from "../utils/getData";

const Home = async () => {
    const pokemons = await getData();
    const view = `
	<div class="cards-container">
		${pokemons.map(pokemon => `
		<a href="#/${pokemon.id}/">
			<div class="card">
				<span class="pokemon-id">${pokemon.id}</span>
				<img src="${pokemon.img} " alt="${pokemon.name}">
				<hr>
				<h4 class="pokemon-name">${pokemon.name}</h4>
				<div class="type-container">
					${pokemon.types.map(type => `
						<div class="${type} type">${type.charAt(0).toUpperCase()}${type.slice(1)}</div>	
					`).join('')}
				</div>
			</div>
		</a>`).join('')}
	</div>`;
    return view;
};

export default Home;
