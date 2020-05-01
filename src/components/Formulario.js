import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomonedas';

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

const Formulario = () => {
    const MONEDAS = [
         { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
         { codigo: 'MXN', nombre: 'Peso Mexicano' },
         { codigo: 'EUR', nombre: 'Euro' },
         { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];
    const [moneda, SelectMonedas] = useMoneda('Selecciona tu moneda', '', MONEDAS);
    const [cripto, SelectCripto] = useCriptomoneda();

    return ( 
        <form >
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