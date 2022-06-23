/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import React from 'react';

function Card() {
  return (
    <div className="bg-white p-6 mt-10 rounded-md border-1 border-slate-50 shadow-2xl shadow-black">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">Cidade</span>
        <span className="text-slate-400 text-sm font-medium">Estado</span>
      </div>

      <div className="font-bold text-slate-700 flex mt-3 mb-2">
        <span className="text-8xl">27</span>
        <span className="text-3xl mt-2">ºC</span>
      </div>

      <div className="text-center">
        <span className="block">icone</span>
        <span className="text-slate-700 font-medium">nublado</span>
      </div>
    </div>
  );
}

// eslint-disable-next-line linebreak-style
export default Card;
