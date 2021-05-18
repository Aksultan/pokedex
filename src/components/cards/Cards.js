import Card from './card/Card'
import "./Cards.css"
import getPokemons from '../../data/PokemonsData';
import { useEffect, useState } from 'react';


function Cards(){
    let [pokemons, setPokemons] = useState([]);
    useEffect(()=>getPokemons().then(response=>{
        setPokemons(response.data.pokemon_v2_pokemon)
    }))
    
    return(
        <section className="section-cards">
            <div className="container d-flex flex-wrap">
                {pokemons.map((pokemon, index)=>
                    <Card key={index} pokemon={pokemon} />
                )}
            </div>
        </section>    
    );
}

export default Cards;