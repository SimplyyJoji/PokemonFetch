import { useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList'

function App() {
  const [clicked, setClick] = useState(false)
  return (
    <div className="App">
      <button onClick={setClick}>Fetch</button>
      {
      clicked ?
      <PokemonList />
      :null
  }
    </div>
  );
}

export default App;
