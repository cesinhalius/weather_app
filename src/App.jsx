import React from 'react';

function App() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <form>
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none"
        />
        <button
          type="submit"
          className="bg-sky-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
    </div>
  );
}

export default App;
