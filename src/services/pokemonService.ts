const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

export const fetchPokemon = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error en la API");
  const data = await response.json();
  return data.results;
};