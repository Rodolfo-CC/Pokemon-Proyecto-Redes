export interface PokemonBase {
  name: string;
  url: string;
}

export interface PokedexResponse {
  results: PokemonBase[];
}