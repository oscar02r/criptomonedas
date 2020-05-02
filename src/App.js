import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Image from './criptomonedas.jpeg';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';

const Cotenedor = styled.div`
      max-width: 900px;
      margin: 0 auto;
      @media (min-width:992px){
             display: grid;
             grid-template-columns: repeat(2, 1fr);
             column-gap: 2rem;
      }
     
`;

const Imagen = styled.img`
      width: 100%;
      margin-top: 5rem;

`;

const Heading = styled.h1`
      font-family: 'Bebas Neue', cursive;
      color: #FFF;
      text-align: left;
      font-weight: 700;
      font-size: 50px;
      margin-top: 80px;
      margin-bottom: 50px;

      &::after{
         content: '';
         width: 100%;
         height:5px;
         background-color: #66A2FE;  
         display: block;      
      }
`;

function App() {
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {
    if(moneda === '') return;
    
    const cotizarCriptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

    }
    cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  return (
    <Cotenedor>
      <div>
         <Imagen
           src ={Image}
           alt="Imagen cripto"
         />
      </div>

      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda = {guardarCriptomoneda}       
        />
        <Cotizacion
          resultado = {resultado}
        />
      </div>
    </Cotenedor>
  );
}

export default App;
