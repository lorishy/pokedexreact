import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
                const pokemonList = response.data.results;
                const pokemonWithTypes = await Promise.all(
                    pokemonList.map(async (poke) => {
                        const pokemonDetails = await axios.get(poke.url);
                        const types = pokemonDetails.data.types.map((typeData) => typeData.type.name);
                        return {
                            name: poke.name,
                            id: pokemonDetails.data.id,
                            types: types,
                            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.data.id}.png`
                        };
                    })
                );
                setPokemon(pokemonWithTypes);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPokemonList();
    }, []);

    const pageSize = 20;
    const pageCount = Math.ceil(pokemon.length / pageSize);
    const visiblePokemon = pokemon.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const addToPokedex = (poke) => {
        if (!isInPokedex(poke)) {
            const updatedPokedex = [...pokedex, poke];
            setPokedex(updatedPokedex);
            localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
        }
    };

    const isInPokedex = (poke) => {
        return pokedex.some((p) => p.id === poke.id);
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, pageCount));
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="container">
            <div className="row">
                {visiblePokemon.map((poke, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card">
                            <img src={poke.imageUrl} alt={poke.name} className="card-img-top" style={{ maxHeight: "150px", objectFit: "contain" }} />
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{poke.name}</h5>
                                <p className="card-text">N°: {poke.id}</p>
                                <p className="card-text">Types: <span className="fw-bold">{poke.types.join(", ")}</span></p>
                                <button className="btn btn-danger" onClick={() => addToPokedex(poke)}>
                                    {isInPokedex(poke) ? "Déjà dans le Pokédex" : "Ajouter au Pokédex"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="m-3 d-flex justify-content-between">
                <button
                    className="btn btn-danger btn-lg"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    style={{ borderRadius: "20px", minWidth: "150px" }}
                >
                    Page précédente
                </button>
                <button
                    className="btn btn-danger btn-lg"
                    onClick={nextPage}
                    disabled={currentPage === pageCount}
                    style={{ borderRadius: "20px", minWidth: "150px" }}
                >
                    Page suivante
                </button>
            </div>
        </div>


    );
}
