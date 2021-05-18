import './Tag.css';
import pokemon_types_background from "../../data/PokemonTypesColors";

function Tag(props){
    //why are we doing this? just to suffer?
    let types = props.types.map(type=>type.pokemon_v2_type.name)
    return(
        <>
        {
            types.map((type, index)=>{
                return <div key={index} className="tag badge" style={{backgroundColor:pokemon_types_background[type]}}>
                    {type}
                </div>
            })
        }
        </>
    )
}

export default Tag;