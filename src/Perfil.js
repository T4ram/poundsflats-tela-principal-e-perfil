import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Importando Link, useNavigate e useLocation
import backArrow from './icons/back-arrow.svg';
import check from './icons/check.svg';
import clock from './icons/clock.svg';
import star from './icons/star.svg';
import edit from './icons/edit.svg';
import botao1Dark from './icons/botao1-dark.png';
import botao1Light from './icons/botao1-light.png';
import botao2 from './icons/botao2.svg';
import botao3 from './icons/botao3.svg';
import botao4 from './icons/botao4.svg';
import botao5Dark from './icons/botao5-dark.png';
import botao5Light from './icons/botao5-light.png';

import './Perfil.css'; // Arquivo de estilo específico para a tela de perfil

function Perfil() {
  const navigate = useNavigate(); // Hook para navegação programática
  const location = useLocation(); // Hook para verificar a rota ativa

  // Função para navegação dinâmica
  const handleNavSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="perfil-container">
      {/* Cabeçalho com seta de voltar */}
      <div className="header">
        <img
          src={backArrow}
          alt="Voltar"
          className="back-arrow"
          onClick={() => handleNavSelect('/')} // Navega para a tela inicial
        />
        <h1>Meu Perfil</h1>
      </div>

      {/* Foto de perfil */}
      <div className="foto-perfil-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/46db/a90c/9e079416f760c0281d83276faaabe0c3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g48JTrXUBeVkn5B3Uj-RtkDbjAyBg1sSmHdWvOMlU8ehyJXbw0lsFbdC1W5NZ1CL42covWgiNds4XOKuVwqidRyrN38hlfbKnWth1GP9QdVbuBs7pNlPdlA~USArzYuTI0F0ODLg6odxN2pHLXg3s82e8nX7AWjNSCj81Ej0jr0W~vWkMS~64oavHsVYo3MTTl~bQ4CEIbkWLx3JVN3lOOPGNwwWo2LeMLwQNz6v8HwGpRohT-KX-Op57E0z-gOPnUqtTOi6Zc3gdeFd7lDFqC4747FQYp7x1NCRlmHc3OOdNCR59-5YFyQ2e1b5WfwJj4X9Cm1euMzTNvnfYqV11A__"
          alt="Foto de perfil"
          className="foto-perfil"
        />
      </div>

      {/* Nome e sobrenome */}
      <h2 className="nome">Henrique Rodrigues</h2>

      {/* Botão Editar foto */}
      <div className="editar-foto">
        <img src={edit} alt="Edit" className="editar-item" />
        <span>Editar foto</span>
      </div>

      {/* Ícones de Perfil */}
      <div className="perfil-info">
        <div className="icon-container">
          <img src={check} alt="Check" className="verificado-icon" />
          <span className="perfil-verificado">Perfil Verificado</span>
        </div>
        <div className="icon-container">
          <img src={star} alt="Avaliações" className="avaliacoes-icon" />
          <span className="avaliacoes">4.5 Avaliações</span>
        </div>
        <div className="icon-container">
          <img src={clock} alt="Tempo" className="tempo-icon" />
          <span className="tempo-app">10 meses no app</span>
        </div>
      </div>

      {/* Caixa de texto bloqueada */}
      <div className="input-container">
        <label>Nome e sobrenome</label>
        <input type="text" value="Henrique Rodrigues" disabled />
      </div>

      <div className="input-container">
        <label>CPF</label>
        <input type="text" value="123.456.789-00" disabled />
      </div>

      <div className="input-container">
        <label>Número de celular</label>
        <input type="text" value="(11) 98765-4321" disabled />
      </div>

      <div className="input-container">
        <label>Data de Nascimento</label>
        <input type="text" value="01/01/1990" disabled />
      </div>

      <div className="input-container">
        <label>E-mail</label>
        <input type="email" value="henrique@email.com" disabled />
      </div>

      <div className="input-container">
        <label>Senha</label>
        <input type="password" value="********" disabled />
      </div>

      {/* Botão para Editar Informações */}
      <button className="editar-info-btn">Editar informações</button>

      {/* Rodapé com ícones de navegação */}
      <footer className="nav-bottom">
        <div
          className="nav-icon"
          onClick={() => handleNavSelect('/')}
        >
          <img
            src={location.pathname === '/' ? botao1Light : botao1Dark}
            alt="Tela Inicial"
            className={location.pathname === '/' ? 'active' : 'inactive'}
          />
        </div>
        <div
          className={`nav-icon ${location.pathname === '/calendario' ? 'selected' : ''
            }`}
          onClick={() => handleNavSelect('/calendario')}
        >
          <img src={botao2} alt="Calendário" />
        </div>
        <div
          className={`nav-icon ${location.pathname === '/arquivo' ? 'selected' : ''
            }`}
          onClick={() => handleNavSelect('/arquivo')}
        >
          <img src={botao3} alt="Arquivo" />
        </div>
        <div
          className={`nav-icon ${location.pathname === '/chat' ? 'selected' : ''
            }`}
          onClick={() => handleNavSelect('/chat')}
        >
          <img src={botao4} alt="Chat" />
        </div>
        <Link to="/perfil">
          <div
            className="nav-icon"
            onClick={() => handleNavSelect('/perfil')}
          >
            <img
              src={location.pathname === '/perfil' ? botao5Light : botao5Dark}
              alt="Perfil"
              className={location.pathname === '/perfil' ? 'active' : 'inactive'}
            />
          </div>
        </Link>
      </footer>
    </div>
  );
}

export default Perfil;
