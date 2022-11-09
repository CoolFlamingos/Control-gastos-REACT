import Lista from "./lista";
import React from 'react'


function ListadoGastado ({ gastos,setGasto,eliminarGasto,filtro, gastosFiltrados}) {
  return (
    <div>
       {filtro ? (
          <>
          <div>
            <h2>{gastosFiltrados.length ? '':''}</h2>
            </div>
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