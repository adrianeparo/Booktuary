
import React from 'react';
import { Link } from 'react-router-dom';
import Gato from '../../assets/gato.svg'
import {HomeC, Imagem, Content, Logo, TextSection, ButtonPrimary, ButtonSecondary } from './style';


function Inicial() {

  return (
  
      <HomeC>

      <Imagem>
        <img src={Gato} />
      </Imagem>

      <Content>

        <Logo>bookTuary</Logo>

        <TextSection>
          <h2>Onde cada livro encontra seu legado</h2>
          <ButtonPrimary to="/cadastro" >Cadastre-se</ButtonPrimary>
          <ButtonSecondary to="/login">Já tem uma conta? Faça seu login</ButtonSecondary>
        </TextSection>

      </Content>

      

      </HomeC>

  )
}

export default Inicial
