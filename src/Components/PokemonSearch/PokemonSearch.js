import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        const fetchAllPokemon = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
                const pokemonList = response.data.results.map((poke, index) => ({
                    name: poke.name,
                    id: index + 1,
                }));
                setAllPokemon(pokemonList);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAllPokemon();
    }, []);

    const handleChange = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = allPokemon.filter(pokemon => pokemon.name.includes(term));
        setFilteredPokemon(filtered);
    };

    const handleBlur = () => {
        if (searchTerm.trim() === "") {
            setFilteredPokemon([]);
        }
    };

    return (
        <div className="container mt-5">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Rechercher un Pokémon"
                className="form-control mb-3"
            />
            {filteredPokemon.length > 0 && (
                <div>
                    <ul className="list-group">
                        {filteredPokemon.map((pokemon, index) => (
                            <li key={index} className="list-group-item">
                                {pokemon.name}
                                <button className="btn btn-danger">
                                    Ajouter au Pokédex
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PokemonSearch;
