import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/Navbar";
import Pokedex from "../Pokedex/Pokedex";

export default function PokedexPage() {
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        const storedPokedex = JSON.parse(localStorage.getItem("pokedex")) || [];
        setPokedex(storedPokedex);
    }, []);

    const removeFromPokedex = (poke) => {
        const updatedPokedex = pokedex.filter((p) => p.id !== poke.id);
        setPokedex(updatedPokedex);
        localStorage.setItem("pokedex", JSON.stringify(updatedPokedex));
    };

    const clearPokedex = () => {
        setPokedex([]);
        localStorage.removeItem("pokedex");
    };

    return (
        <div>
            <NavBar />
            <h1 className="mt-3 p-4">Pokédex</h1>
            <div className="mt-3">
                <Pokedex pokedex={pokedex} removeFromPokedex={removeFromPokedex} clearPokedex={clearPokedex} />
            </div>
        </div>
    );
}
