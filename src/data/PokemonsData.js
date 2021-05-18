import axios from 'axios';

const API_URL = "https://beta.pokeapi.co/graphql/v1beta";

let getPokemons = async () => {
    let req = await axios({
        method: 'post',
        url: API_URL,
        headers: {
            'Content-Type' : 'application/json',
            'X-method-used' : 'graphiql'
        },
        data: {
            query:`
            query PokeAPIquery {
                pokemon_v2_pokemon(limit: 887) {
                  name
                  id
                  base_experience
                  pokemon_v2_pokemonstats {
                    base_stat
                    pokemon_v2_stat {
                      name
                    }
                  }
                  pokemon_v2_pokemontypes {
                    pokemon_v2_type {
                      name
                    }
                  }
                }
              }
            `
        }
    })
    return req.data
}

export default getPokemons;