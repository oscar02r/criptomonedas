import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomonedas';
import Error from './Error';

const Boton = styled.input`
     margin-top: 20px;
     font-weight: bold;
     font-size: 20px;
     padding: 10px;
     background-color: #66a2fe;
     border:none;
     width: 100%;
     border-radius: 10px;
     color: #FFF;
     transition: background-color 0.3 ease;

     &:hover{
         background-color: #326AC0;
         cursor: pointer;
     }
`;

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    const MONEDAS = [
         { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
         { codigo: 'MXN', nombre: 'Peso Mexicano' },
         { codigo: 'EUR', nombre: 'Euro' },
         { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];
    const [listaCripto, guardarListaCripto] = useState([]);
    const [moneda, SelectMonedas] = useMoneda('Selecciona tu moneda', '', MONEDAS);

    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', ' ', listaCripto);
    const [ error, guardarError ] = useState(false);

    useEffect(() => {
      const consultarApi =  async () => {
            const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(URL);
            guardarListaCripto(resultado.data.Data);
           
      }
      consultarApi();
    }, []);
    
    const cotizarMoneda = e =>{
         e.preventDefault();
         if( moneda.trim() === '' || criptomoneda.trim() === '' ){
          guardarError(true);   
          return;  
         }

         guardarError(false);
         guardarCriptomoneda(criptomoneda);
         guardarMoneda(moneda);

    }

    return ( 
        <form onSubmit={cotizarMoneda} >
          {error ? <Error mensaje="Todos los campos son obligatios"/> : null}
          <SelectMonedas/>
          <SelectCripto/>
          <Boton 
              type="submit"
              value="Calcular"
          />
         
        </form>
     );
}
 
export default Formulario;