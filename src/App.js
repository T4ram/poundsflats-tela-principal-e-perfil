import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Atualize as importações
import TelaInicial from './TelaInicial';  // Importe o componente da tela inicial
import Perfil from './Perfil';            // Importe o componente de perfil
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TelaInicial />} />  {/* Rota para a tela inicial */}
          <Route path="/perfil" element={<Perfil />} />        {/* Rota para a tela de perfil */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
