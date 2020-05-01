import React, {useState} from 'react'

const useMoneda = () => {
    const [state, actualizarState] = useState('');

    const Seleccionar = () => ( 
       <>
        <label htmlFor="">Moneda</label>
        <select>
          <option value="MXN" >Peso Mexicano</option>

        </select>
       </> 
    );

    return [state, Seleccionar, actualizarState];

}
 
export default useMoneda;
