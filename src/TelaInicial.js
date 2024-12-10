import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './TelaInicial.css';
import backArrow from './icons/back-arrow.svg';
import botao1Dark from './icons/botao1-dark.png';
import botao1Light from './icons/botao1-light.png';
import botao2 from './icons/botao2.svg';
import botao3 from './icons/botao3.svg';
import botao4 from './icons/botao4.svg';
import botao5Dark from './icons/botao5-dark.png';
import botao5Light from './icons/botao5-light.png';
import plus from './icons/plus.svg';
import star from './icons/star.svg';

const TelaInicial = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNavSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="tela-inicial">
      <header className="header">
        <Link to="/">
          <img src={backArrow} alt="Voltar" className="back-arrow" />
        </Link>
        <button className="cadastrar-imovel">
          <img src={plus} alt="Mais" className="cadastrar-imovel-icon" />
          Cadastrar imóvel
        </button>
      </header>

      <div className="welcome-section">
        <h1>Bem-vindo, Henrique!</h1>
      </div>

      <div className="buttons-container">
        <button className="btn-roxo">Todos os flats</button>
        <button className="btn-branco">Indisponíveis</button>
      </div>

      <div className="imovel">
        <div className="image-slider">
          <img
            src="https://s3-alpha-sig.figma.com/img/9180/3c60/56cde7387c7af8e5d3fad83849a7ed02?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kcMc1zMWOjpvocC6nm1emjsgLTFGaYpXL4xxUMdPDbqakopJQ~hbQ-JMYplVl1O1452QItQwnIlGHYVrXTNFDyG6YcBR-M7SFvW4uqw0YUYWk5A2dGRBWkEuIRwzRUny4Zn05Ret432hUOprJd4w7S34oDRBXhw8SilqVPIOpF0ZwNM8ZIWjC29C0-kvunjURLqGB9uTqmU5SUhoMkaPaUjf0YEs1-Wk8~Kp8xeo8SaPQLMj~sqX7Ome1JcxVGN4G5RSyLHxNtb1jcRhsNqWqKkBBK8m37EMO5OdgDhcfbIx6lzGzufQjsbjk5QLUi7O6Dz2m9fX8PPiL6qFb4MZHw__"
            alt="Imóvel"
            className="imagem-imovel"
          />
          <div className="image-navigation">
            <div
              className={`dot ${selectedImageIndex === 0 ? 'selected' : ''}`}
              onClick={() => handleImageChange(0)}
            />
            <div
              className={`dot ${selectedImageIndex === 1 ? 'selected' : ''}`}
              onClick={() => handleImageChange(1)}
            />
            <div
              className={`dot ${selectedImageIndex === 2 ? 'selected' : ''}`}
              onClick={() => handleImageChange(2)}
            />
          </div>
        </div>

        <div className="info-imovel">
          <h2>Poundsflats Aquário
            <div className="rating">
              <span className="star">
                <img src={star} alt="Avaliacao" className="rating-star" />
              </span>
              <span className="rating-value">4,5</span>
            </div>
          </h2>
          <div className="imovel-details">
            <span className="location">Santos, SP</span>
            <span className="price">Diária: R$ 597</span>
          </div>
        </div>
      </div>

      <footer className="nav-bottom">
        <div
          className="nav-icon"
          onClick={() => handleNavSelect('/')}
        >
          <img
            src={location.pathname === '/' ? botao1Light : botao1Dark}
            alt="Tela Inicial"
          />
        </div>
        <div
          className="nav-icon"
          onClick={() => handleNavSelect('/calendario')}
        >
          <img
            src={botao2}
            alt="Calendário"
          />
        </div>
        <div
          className="nav-icon"
          onClick={() => handleNavSelect('/arquivo')}
        >
          <img
            src={botao3}
            alt="Arquivo"
          />
        </div>
        <div
          className="nav-icon"
          onClick={() => handleNavSelect('/chat')}
        >
          <img
            src={botao4}
            alt="Chat"
          />
        </div>
        <div
          className="nav-icon"
          onClick={() => handleNavSelect('/perfil')}
        >
          <img
            src={location.pathname === '/perfil' ? botao5Light : botao5Dark}
            alt="Perfil"
          />
        </div>
      </footer>
    </div>
  );
};

export default TelaInicial;
