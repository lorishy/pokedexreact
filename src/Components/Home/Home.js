import React from "react";
import NavBar from "../Navbar/Navbar";
import PokemonList from "../PokemonList/PokemonList";

export default function Home() {
    return (
        <div>
            <NavBar />
            <h1 className="mt-3 p-4">Liste des pokémons</h1>
            <PokemonList />
        </div>
    )
}