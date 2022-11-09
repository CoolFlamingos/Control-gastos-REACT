import { useState, useEffect } from "react"


function Gastado({ gastos,presupuesto,setGastos,setPresupuesto,setIsValid }) {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    useEffect(() => {
        console.log(gastos)
        const totalGastado = gastos.reduce((total, gasto) =>  gasto.cantidad + total , 0)
        console.log(totalGastado)
        
        const totalDisponible = presupuesto-totalGastado
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        console.log(totalDisponible)
    }, [gastos])


    const handleResetApp = ()=>{
        const resultado = confirm('¿Deseas resetear la app?');
 
        if(resultado){
           setGastos([]);
           setPresupuesto(0);
           setIsValid(false);
        }
     }



    return (
        <div className=" shadow-md w-full rounded-md bg-white-100 text-center">

            <div>
                <button
                    type="button"
                    className="bg-pink-600 hover:bg-pink-700 text-white p-2 uppercase rounded-lg "
                    onClick={handleResetApp}> Resetear app </button>
            </div>
            <br />
            <div>

                <p className="font-bold text-blue-400 uppercase">Presupuesto:<span className="font-normal normal-case">{presupuesto}</span></p><br />
                <p className="font-bold text-blue-400 uppercase">Disponible:<span className="font-normal normal-case">{disponible}</span></p><br />
                <p className="font-bold text-blue-400 uppercase">Gastado:<span className="font-normal normal-case">{gastado}</span></p>

            </div>

        </div>
    )

}

export default Gastado




/**
 class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = [] //arreglo vacio para que me vaya enlistando los gastos
    }
    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante()
    }
    borrarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id); //buscar el id correcto para eliminarlo por ello el filtro
        this.calcularRestante()
    }
    calcularRestante() { //reduce. Metodo que devolvera un solo valor 
        const gastado = this.gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0) // se pone el nombre del arreglo.reduce entre ()  se pone acc: variable acumuladora donde se almacenarán valores parciales en cada iteración del arreglo, despues le doy un nombre al elemento que se itera y llevo acabo la operacion
        //gasto es el objeto donde estamos asignando el nuevo gasto le ponemos ese nombre para buena practica
        //.cantidad es porque ahi se vera reflejado, se debe poner en que numero empezara el accumulador, si no se pone un numero tomara el primer valor del arreglo, pero yo quiero que empiece en 0

        //donde restamos presupuesto y lo gastado
        this.restante = this.presupuesto - gastado
    }
}
 */
