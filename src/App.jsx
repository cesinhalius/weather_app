/* eslint-disable no-console */
import React, { useState } from 'react';
import fetchData from './services/api';
import dadoinicial from './helpers/DadosIniciais';

import Card from './components/Card';

function App() {
  const [cidade, setCidade] = useState('');
  const [data, setData] = useState(dadoinicial);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(cidade).then((resp) => {
      setData(resp);
    });
  };
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-slate-600">
      <h1 className="flex mb-5 w-full items-center justify-center text-3xl uppercase">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ex: Campinas"
          className="p-3 rounded-lg outline-none shadow-lg shadow-black"
          value={cidade}
          onChange={({ target: { value } }) => setCidade(value)}
        />
        <button
          type="submit"
          className="bg-sky-600 p-3 rounded-lg ml-3 text-white font-bold shadow-lg shadow-black"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
