import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  span{
     font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0)return null;
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas: <span>{resultado.PRICE}</span></Info>
            <Info>Última actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;