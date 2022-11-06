import { useState, useEffect } from 'react';
import Error from './error';


function Formulario({gastos,setGastos,gasto,setGasto}) {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [error, setError] = useState(false)


    const generarId = () => {
        const random = Math.random().toString(36)
        const fecha = Date.now().toString(36)
        return random + fecha
    }


    const validarFormulario = (e) => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) {
            console.log('Hay almenos un campo vacio')
            setError(true)
            return
        };
        setError(false)
        const objetoGasto={nombre,cantidad,categoria}

        
        if (gasto.id) {
            objetoGasto.id = gasto.id
            const gastosAct = gastos.map(gastoState => gastoState.id===gasto.id ? objetoGasto:gastoState)
            setGastos(gastosAct)
            setGasto({})

        } else {
            objetoGasto.id = generarId()
            setGastos([...gastos, objetoGasto])
            
        }

        setNombre('')
        setCantidad('')
        setCategoria('')

    };

    return (

        <div className="md:w-1/2 mx-4 lq:w-1/4 text-center shadow-md w-full rounded-md bg-white-100">
            <h1 className="text-center text-gray-400 uppercase font-bold">Nuevo Gasto</h1> <hr />

            <form
                onSubmit={validarFormulario}>

                {
                    error && <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                }

                <div>
                    <label className="block text-white-100 px-8 rounded-lg">Nombre Gasto</label>
                    <input className="p-2 rounded-md mt-2 bg-gray-200"
                        type="text"
                        placeholder="Añade el nombre del gasto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label className="block text-white-100  px-8 rounded-lg">Cantidad</label>
                    <input className="p-2 rounded-md  mt-2 bg-gray-200"
                        type="number"
                        placeholder="Añade la cantidad del gasto: ej. 300"
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>
                <br />

                <div>
                    <label for="Categoria">
                        Categoria
                    </label>
                    <br />
                    <select name="Seleccione" id="categoria" className='w-60 text-center p-3 rounded-lg ' value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">--Seleccione--</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="Comida">Comida</option>
                        <option value="Casa">Casa</option>
                        <option value="GastosVarios">Gastos Varios</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Salud">Salud</option>
                        <option value="Suscripcion">Suscripcion</option>
                    </select>
                </div>


                <br />
                <div>
                    <input className="p-2 rounded-md width-full mt-2 bg-blue-600 text-white text-bold hover:bg-blue-800 uppercase cursor-pointer transition-colors"
                        type="submit"
                        value={gasto.id?'editar gasto':'Agregar gasto'} />
                </div>
            </form>
            <br />

        </div>
    )
}

export default Formulario


/*
        
        */

