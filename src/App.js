import './index.css';
import { FiSearch } from 'react-icons/fi'
import './styles.css';
import { useState } from 'react';


function App() {

  const { input, setInput } = useState('')


  function handleSearch() {
    alert(input);
  }

  return (
    <div className="container">
      <h1 className="title">Buscador Cep</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#000" />
        </button>
      </div>
      <main className='main'>
        <h2>Cep: 7901030</h2>

        <span>Rua Eduardo Santos Pereira</span>
        <span>Complemento: Residencia</span>
        <span>Monte Castelo</span>
        <span>Campo Grande - MS</span>

      </main>
    </div>
  );
}

export default App;
