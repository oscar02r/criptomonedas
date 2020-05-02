import React from 'react';

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0)return null;
    return ( 
        <div>
            <p>El precio es: <span>{resultado.PRICE}</span></p>
            <p>Precio más alto del día: <span>{resultado.HIGHDAY}</span></p>
            <p>El precio más bajo del día: <span>{resultado.LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{resultado.PRICE}</span></p>
            <p>Última actualización: <span>{resultado.LASTUPDATE}</span></p>
        </div>
     );
}
 
export default Cotizacion;