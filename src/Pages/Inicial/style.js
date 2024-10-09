import styled from "styled-components";
import { Link } from "react-router-dom";


export const HomeC = styled.div`

`;

export const Imagem = styled.div`

  display: flex; /* Usa o layout flexbox */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  width: 50vw; /* Define a largura como 50% da largura da viewport */
  height: 100vh; /* Define a altura como 100% da altura da viewport */
  position: absolute; /* Posiciona o elemento em relação à sua posição ancestral */
  right: 0; /* Posiciona o elemento na extremidade direita da tela */
  top: 0; /* Posiciona o elemento no topo da tela */

  img {
    width: 954px; /* Define a largura da imagem (ajuste conforme necessário) */
    height: 100%; /* A altura da imagem ocupa 100% do container */
    object-fit: cover; /* Faz a imagem cobrir todo o container, cortando se necessário */
    border-radius: 100px 0px 0px 100px; /* Adiciona bordas arredondadas, com um estilo específico */
  }

`;



export const Content = styled.div`

  display: flex; /* Usa flexbox para organizar os itens dentro da div */
  flex-direction: column; /* Alinha os itens em coluna */
  align-items: flex-start; /* Alinha os itens à esquerda */
  padding: 50px; /* Adiciona um espaçamento interno (padding) na div */
  height: 100%; /* Garante que a div ocupe toda a altura disponível */
`;

// Estiliza o h1 Logo
export const Logo = styled.h1`
  margin-top: 20px; /* Espaçamento acima do Logo */
  margin-bottom: 50px; /* Espaçamento abaixo do Logo para o próximo conteúdo */
  font-size: 30px; /* Tamanho da fonte do Logo */
  font-weight: bold; /* Define o peso da fonte como negrito */
  color: #D6C9C9;/* Cor do texto (ajuste conforme necessário) */
  text-align: left; /* Alinha o texto à esquerda */
  width: 100%; /* Garante que o h1 ocupe toda a largura disponível */
  text-shadow: 0px 0px 17.052px #D6C9C9, 0px 0px 4.872px #D6C9C9;
  font-family: Milonga;
  font-style: normal;
  line-height: normal;
  

`;





export const TextSection = styled.div`

`;



export const ButtonPrimary = styled(Link)`

  
`;

export const ButtonSecondary = styled(Link)`
 
`;
