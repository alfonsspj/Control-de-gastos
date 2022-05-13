import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('');

    // validar valor del presupuesto
    const handlePresupuesto = (e) => {
        e.preventDefault();

        // console.log(Number(presupuesto));// los number siempre se muestrean en color negro en la consola con el Number lo convertimos a numero
        // console.log('enviando formulario')

        if(!presupuesto || presupuesto < 0 ) {
            setMensaje('No es un presupuesto válido');
            return
        }   
        setMensaje('')
        setIsValidPresupuesto(true)
        
        // console.log('Si es un presupuesto válido')
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        
        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label>Definir Presupuesto</label>

                <input 
                    className="nuevo-presupuesto"
                    type="number"
                    placeholder="Añade tu Presupuesto"
                    value={presupuesto}
                    onChange={ e=> setPresupuesto(Number(e.target.value))}
                />
            </div>
            
            <input type="submit" value="Añadir" />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>

        
    </div>
  )
}

export default NuevoPresupuesto