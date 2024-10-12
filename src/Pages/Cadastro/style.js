import styled from "styled-components";
import { Link } from "react-router-dom";
import ImgCadastro from '../../assets/imagem-cadastro.svg';


export const Conteudo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Asul:wght@400;700&family=Milonga&display=swap');

  display: flex; 
  justify-content: center;
  align-items: center;
  font-family: 'Asul', serif ;
  height: 100vh; 
  background-image: url(${ImgCadastro});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 

`;

export const Form = styled.form`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15vh;
    padding: 30px;
    border-radius: 50px;
    max-width: 300vh;
    width: 600px;
    background-color: #121111;
    border: 5px solid #121111;
    box-shadow: 0 4px 15px #121111, 0 4px 30px #121111; 
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(20px); /* Compatibilidade para navegadores baseados no WebKit */

    h1{
        display: flex;
        align-items: flex-start;
        color: #D8D8D8;
    }
`;


export const InputNome = styled.div`

  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  margin-top: -10vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;

  @media (min-width: 1800px) {
   width : 90% ;
  }
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #6F79FF; 
    background: transparent; 
    font-size: 16px; 
    color: #909090; 
    outline: none; 
  }
  
   
    input:focus {
      border-bottom: 2px solid #404588;
    }
  
`;

export const DateNick = styled.div`

    display: flex;
    justify-content: space-between;
    width: 24vw;
    gap: 15px;


    @media (min-width: 1800px) {
    width : 25vw ;
  }

`;

export const InputNick = styled.div`

  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  margin-top: -10vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 100%; 
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #6F79FF; 
    background: transparent; 
    font-size: 16px;
    color: #909090; 
    outline: none; 
  }
  
   
    input:focus {
      border-bottom: 2px solid #404588; 
    }

`;

export const InputDate = styled.div`
   
  display: flex;
  flex-direction: column;
  margin-top: -10.3vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #6F79FF;
    background: transparent;
    font-size: 16px;
    color: #909090;
    outline: none; 
  }
  
   
    input:focus {
      border-bottom: 2px solid #404588; 
    }

`;


export const InputUm = styled.div`

display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  margin-top: -15vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;

  @media (min-width: 1800px) {
   width : 90% ;
  }
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 100%;
    padding: 10px 0;
    border: none; 
    border-bottom: 2px solid #6F79FF;
    background: transparent; 
    font-size: 16px; 
    color: #909090;
    outline: none; 
  }
  
    
    input:focus {
      border-bottom: 2px solid #404588;
    }
`;

export const InputDois = styled.div`
 display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  margin-top: -12vh;
  font-family: "Asul", serif;
  text-align: left;
  font-size: 14px;
  width: 70%;

  @media (min-width: 1800px) {
   width : 90% ;
  }
  
  p{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #D8D8D8; 
  }

  input {
    width: 100%; 
    padding: 10px 0; 
    border: none; 
    border-bottom: 2px solid #6F79FF;
    background: transparent; 
    font-size: 16px; 
    color: #909090; 
    outline: none; 
  }
  

    input:focus {
      border-bottom: 2px solid #404588; 
    }
`;