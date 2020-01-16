import React, { useState } from 'react';
import Header from './Header';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembra: imutabilidade)

function App() {
  // Retorna uma variável e um função
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: { counter }</h1>
      <button onClick={ incrementCounter }>Incrementar</button>
    </>
  );
}

export default App;