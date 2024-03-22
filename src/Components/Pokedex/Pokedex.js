import React from "react";

const Pokedex = ({ pokedex, removeFromPokedex, clearPokedex }) => {
    return (
        <div className="container">
            {pokedex.length === 0 ? (
                <p>Le Pokédex est vide.</p>
            ) : (
                <div>
                    {pokedex.map((poke, index) => (
                        <div key={index} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={poke.imageUrl} alt={poke.name} className="img-fluid" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{poke.name}</h5>
                                        <p className="card-text">N° {poke.id}</p>
                                        <p className="card-text">Types: <span className="fw-bold">{poke.types.join(', ')}</span></p>
                                        <button className="btn btn-danger mr-2" onClick={() => removeFromPokedex(poke)}>
                                            Retirer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className="btn btn-danger" onClick={clearPokedex}>
                        Vider le Pokédex
                    </button>
                </div>
            )}
        </div>
    );
};

export default Pokedex;
