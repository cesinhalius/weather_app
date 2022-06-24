/* eslint-disable no-console */
import React, { useState } from 'react';
import fetchData from './services/api';

import Card from './components/Card';

function App() {
  const [cidade, setCidade] = useState('');
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(cidade).then((resp) => {
      setData(resp);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
          value={cidade}
          onChange={({ target: { value } }) => setCidade(value)}
        />
        <button
          type="submit"
          className="bg-sky-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
