function Lista({ gasto, eliminarGasto, setGasto }) {
    const { categoria, nombre, cantidad, id } = gasto
    const eliminarFormulario = () => {
        const respuesta = confirm('Seguro de eliminar el gasto?')
        if (respuesta) {
            eliminarGasto(id)
        }
    }

    return (
        <div className=" shadow-md w-full rounded-md bg-white-100 text-center">
            <p className="font-bold text-gray-400 uppercase">Categoria:<span className="font-normal normal-case text-black">{categoria}</span></p><br />
            <p className="font-bold text-gray-400 uppercase">Nombre:<span className="font-normal normal-case text-black">{nombre}</span></p><br />
            <p className="font-bold text-gray-400 uppercase">Cantidad:<span className="font-normal normal-case text-black">{cantidad}</span></p>

            <div className="flex justify-between mt-10">


                <button
                    type="button"
                    className="p-2 rounded-md width-full mt-2 bg-blue-600 text-white text-bold hover:bg-blue-800 uppercase cursor-pointer transition-colors"
                    onClick={() => setGasto(gasto)}> Editar </button>



                <button
                    type="button"
                    className="p-2 rounded-md width-full mt-2 bg-blue-600 text-white text-bold hover:bg-blue-800 uppercase cursor-pointer transition-colors"
                    onClick={eliminarFormulario}> Eliminar
                </button>
            </div>



        </div>


    )

}

export default Lista

/* 
const eliminarGasto = () => {
        const respuesta = confirm('Seguro de eliminar el gasto?')
        if (respuesta) {
            eliminarGasto(id)
        }
    }




      <button
                    type="button"
                    className="p-2 rounded-md width-full mt-2 bg-blue-600 text-white text-bold hover:bg-blue-800 uppercase cursor-pointer transition-colors"
                    onClick={() => setGasto(gasto)}> Editar </button>
*/