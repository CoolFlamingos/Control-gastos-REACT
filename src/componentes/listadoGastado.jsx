import Lista from "./lista";
import React from 'react'


function ListadoGastado ({ gastos,setGasto,eliminarGasto,filtro, gastosFiltrados}) {
  return (
    <div>
       {filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos':'No hay gastos en esta categoría'}</h2>
            {
              gastosFiltrados.map(gasto => (
                <Lista
                   key={gasto.id}
                   gasto={gasto}
                   setGastoEditar={setGasto}
                   eliminarGasto={eliminarGasto}
                 />
             ))
            }
          </>
        ) :
        (
          <>
          <h2>{gastos.length ? 'Gastos':'No hay gasto aún'}</h2>
          {gastos.map((gasto) => (
            <Lista 
               key={gasto.id}
               gasto={gasto}
               setGastoEditar={setGasto}
               eliminarGasto={eliminarGasto}
             />
          ))}
          </>
        )

       }
    </div>
  )
}

export default ListadoGastado

/* setPresupuesto recibe las modificaciones y las pasa a presupuesto 

 {gastos.map(gasto=>(<Lista
                    key={gasto.id}
                    gasto={gasto}
                    eliminarGasto={eliminarGasto}
                    setGasto={setGasto}/>))}

*/