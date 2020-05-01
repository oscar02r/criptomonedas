import React, {useState} from 'react'

const useMoneda = (label, stateInicial, opciones) => {
    const [state, actualizarState] = useState(stateInicial);

    const Seleccionar = () => ( 
       <>
        <label htmlFor="">{label}</label>
        <select>
          <option value="" >--- Seleccione ---</option>
           {opciones.map(opcion =>(
             <option key={opcion.codigo} value={opcion.codigo} >{opcion.nombre}</option>
           ))}
        </select>
       </> 
    );

    return [state, Seleccionar, actualizarState];

}
 
export default useMoneda;
