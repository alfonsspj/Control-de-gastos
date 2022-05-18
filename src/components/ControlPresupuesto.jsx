// por los cambios que sucedan en gastos
import { useState, useEffect } from 'react'; 

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const[disponible, setDisponible] = useState(0)
    const[gastado, setGastado] = useState(0)

    useEffect(() => {
        // console.log('componente listo')
        // si se tiene un arreglo con objetos el metodo mas usado va a ser .reduce -- va a acumular una gran cantiadad de datos en una sola variable
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        // console.log(totalGastado);

        const totalDisponible = presupuesto - totalGastado;

        setDisponible(totalDisponible)
        setGastado(totalGastado)
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
                <p>Grafica aqui</p>
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