function Header(){ //Siempre debe llevar mayuscula (PascalCase)


    return(
        <div className=" bg-blue-400 text-bold">
        <h1 className="text-center text-gray-100 uppercase font bold p-10">Planificador de gastos</h1>
  
        </div>
    )
  
}

export default Header




/*md = media
      w = width
      lg = grande
      mx = max width
      bg = fondo
      py = padding vertical
      px = padding horizonta
      p = padding
      rounded = border raduis
      
      
      
      */

/*alt + flecha puedes saltar de linea lo que tienes seleccionado */

/*Hooks poder conectar logica de un componente y otro sin la necesidad de clases.
  Decirme el estado en el cual se encuentra cierto componente o funcion del componente (es dinamico porque cambia el estado, debe estar hasta arriba) 
  Use effects se va a ejecutar despues del primer renderizado */


/* useState agregarle un estado lugar a un componente
   Setmascota recibe el valor pero se lo passa a mascota por eso es modificador

   const [mascota,setMascota]=useState('');
   constante [variable, modificador]=hook que voy a estar necesitando en este caso useState ('valor vacio, debe de ir el valor inicial') cambia a ser el nombre de la persona ya cuando se necesita, no siempre es necesario que empiece vacio ya que podemos iniciarlo con informacion y aveces no. Puede iniciar con un numerico, string, objeto, arreglo, etc. 


onChange={(e)=>setMascota(e.target.value)} se le aplica el evento change y se guarda en el modificador. 
(e.target.value) representa el valor del input. El momento que se le aplica el cambio (llenamos el input y ponemos un nombre)enotnces pasa a setMacota se lo asigna a mascota
                            


error=constante de error que se creo que es =false (estado)
Error=funcion Error
&&= ambos error y Error deben cumplirse para que me imprima la leyenda de que todos los campos son obligatrios
error&&<Error>
<p>Todos los campos son obligatorios</p>
</Error>

//Props: evitar duplicar codigo y reutilizar las variables props. Nunca se puede pasar info del hijo al padre, hijos son odos los componentes. Cada nivel de los componenetes debe de pasar por ortos componentes
//numeros={1}
//izquierdo (nombre) derecho (informacion que voy a comporatir o pasar)
Gneralmente no se usan cuando hay muchos componenetes (como mas de 15)

Use effect dentro del corchete se llama dependencia. Condicion la cual depende mi use effect. El valor que esta cambiando, cuando cambia apciente se efectuara el use effect
  
Object.keys: verificar si hay algo en el objeto
*/
