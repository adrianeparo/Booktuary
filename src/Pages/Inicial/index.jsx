
import React from 'react';
import { Link } from 'react-router-dom';
import Gato from '../../assets/gato.svg'


function Inicial() {

  return (
    <>
      <div className="home-container">
        <header>
          <h1 className="logo">bookTuary</h1> 
        </header>

        <div className="content">
          <div className="text-section">
            <h2>Onde cada livro encontra seu legado</h2>
            <Link to="/cadastro" className="btn-primary">Cadastre-se</Link>
            <Link to="/login" className="btn-secondary">Já tem uma conta? Faça seu login</Link>
          </div>

          <div className="image-section">
            <img src={Gato}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inicial
