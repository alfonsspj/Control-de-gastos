// por los cambios que sucedan en gastos
import { useState, useEffect } from 'react'; 
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const[disponible, setDisponible] = useState(0)
    const[gastado, setGastado] = useState(0)
    
    useEffect(() => {
        // console.log('componente listo')
        // si se tiene un arreglo con objetos el metodo mas usado va a ser .reduce -- va a acumular una gran cantiadad de datos en una sola variable
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        // console.log(totalGastado);

        const totalDisponible = presupuesto - totalGastado;

        // Calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(2);
                
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)            
        }, 1500);
    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                {/* Grafica circular */}
                <CircularProgressbar 
                    // reecribir los styles
                    styles={buildStyles({
                        pathColor: '#3b82f6',
                        trailColor: '#f5f5f5',
                        textColor: '#3b82f6'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
  )
}

export default ControlPresupuesto