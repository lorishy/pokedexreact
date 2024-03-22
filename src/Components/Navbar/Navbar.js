import React from 'react';
import { Link } from 'react-router-dom';
import pokeimg from '../Navbar/pokeball.png';

export default function NavBar() {
    return (
        <nav className="navbar bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-brand text-light">
                    <img src={pokeimg} alt="Pokeball" width="50" height="50" />
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/'>Liste Pokémons</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='/pokedex'>Pokédex</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
