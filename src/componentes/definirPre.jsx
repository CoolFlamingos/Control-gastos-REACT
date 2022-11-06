import{useState} from 'react'
import Error from './error';


function Definir({presupuesto,setPresupuesto,setPresupuestos}) {

    //preguntarPresupuesto()

    const [error, setError] = useState('');
    
const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto||presupuesto<=0){
        setError('No es presupuesot valido')
        return
    }
    setError('')
    setPresupuestos(true)

 }

    return (

        <div className="md:w-1/2 mx-4 lq:w-1/4 text-center">
            <form className="bg-white-100 py-10 px-8 shadow-md rounded-lg" on onSubmit={handlePresupuesto}
           
          >
                 <label> Definir Presupuesto </label>
                <div>
                    <input className=" p-2 rounded-md width-full mt-2 bg-gray-200 "
                        type="number"
                        value={presupuesto}
                        onChange={(e)=>setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <br/>
                <div>
                    <input className="p-2 rounded-md width-full mt-2 bg-blue-500 text-gray-100 font-bold hover:bg-blue-700 uppercase cursor-pointer transition-colors"
                        type="submit"
                        value={'Añadir'}/>
                        

{error && <Error tipo="error">{error}</Error> }

                </div>
            </form>

        </div>

    )

}

export default Definir


/*
export function preguntarPresupuesto() {
    const presupestoUsuario = prompt('¿Cual es tu presupuesto?')

    if (presupestoUsuario === '' || presupestoUsuario === null || isNaN(presupestoUsuario) || presupestoUsuario <= 0) { //isNaN no te dejara pasar a la pagina si esta vacio o no tiene valor numerico y sea mayor que 0
        window.location.reload(); //recargara la ventana de recarga tu presupuesto y no se podra acceder al resto de la pagina hasta que tenga la informacion requerida
    }


    //siendo un presupuesto valido
    presupuesto = new Presupuesto(presupestoUsuario); //para instanciar la clase presupuesto dentro de la funcion, se hace dentro de otra funcion para que solo se ocupe esa funcion y ninguna otra pueda accedeer a la informacion. Se declara la variable let fuera para poderlo hacer
    console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto) //mando a llamar la instancia ui con el metodo insertar presupuesto con el valor presupuesto, el valor que le estamos dando en el prompt 
}

nfm para funciones

number es para parsear el string a un entero

*/