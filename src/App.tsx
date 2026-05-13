import { useEffect, useState } from 'react';
import { fetchPokemon } from './services/pokemonService';
import type { PokemonBase } from './types/pokemon';

function App() {
  const [list, setList] = useState<PokemonBase[]>([]);

  useEffect(() => {
    fetchPokemon().then(setList);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Pokédex - Clase 1</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
        {list.map(p => (
          <div key={p.name} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
            <p>{p.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;