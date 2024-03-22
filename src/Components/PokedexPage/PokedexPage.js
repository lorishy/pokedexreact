import NavBar from "../Navbar/Navbar";
import Pokedex from "../Pokedex/Pokedex";
import PokemonSearch from "../PokemonSearch/PokemonSearch";

export default function PokedexPage() {

    return (
        <div>
            <NavBar />
            <h1 className="mt-3 p-4">Pokédex</h1>
            <div className="mt-3">
                <PokemonSearch />
                <Pokedex />
            </div>
        </div>
    );
}
