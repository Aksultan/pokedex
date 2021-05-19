import './Card.css';
import Tag from '../../tags/Tag';
import Radar from '../../radar/Radar';
import pokemon_types_background from "../../../data/PokemonTypesColors";

function Card({pokemon, ...props}){
    let types = pokemon.pokemon_v2_pokemontypes;
    let stats = pokemon.pokemon_v2_pokemonstats.map(stat=>stat.base_stat)
    return(    
        <div className="card" style={{backgroundColor: pokemon_types_background[types[0].pokemon_v2_type.name]}}>
            <div className="inner-card">
                <div className="front-face">
                    <h4 className="number">
                        #{String(pokemon.id).padStart(3, '0')}
                    </h4>
                    <h3 className="name">
                        {pokemon.name}
                    </h3>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name} onError={(e)=>{e.target.onerror = null; e.target.src="https://www.freepnglogos.com/uploads/question-mark-png/file-question-mark-svg-wikimedia-commons-28.png"}}/>
                    <div className="tags">
                        <Tag types={types}/>
                    </div>
                </div>
                <div className="back-face">
                    <Radar stats={stats}/>
                </div>
            </div>
        </div>
    )
}


export default Card;