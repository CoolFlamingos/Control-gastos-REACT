import Header from "./componentes/header"
import Definir from "./componentes/definirPre"
import ControlPresupuesto from "./componentes/controlPresupuesto"
import ListadoGastado from "./componentes/listadoGastado"
import Formulario from "./componentes/formulario"
import FiltrarCom from "./componentes/filtro"
import { useState, useEffect } from "react"


function App() {

  const [presupuesto, setPresupuesto] = useState(
   
  );
  const [isValid, setIsValid] = useState(false)
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria == filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])

  
    useEffect(() => {
      const obtenerLS = (() => {
        const gastosLS = JSON.parse(localStorage.getItem('gastos')) ?? []
        setGastos(gastosLS)
      })
      obtenerLS()
    }, [])
  
    useEffect(() => {
      localStorage.setItem('gastos', JSON.stringify(gastos))
    }, [gastos])
  

  const eliminarGasto = id => {
    const gastosAct = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosAct)
  }

  return (

    <div className="mt-20 container mx-auto">
      <Header />

      <div className="md:flex mt-12">

        {
          isValid == false ?
            <Definir
              setPresupuesto={setPresupuesto}
              presupuesto={presupuesto}
              setIsValid={setIsValid}
            />
            :
            <>
              <ControlPresupuesto
                gastos={gastos}
                setGastos={setGastos}
                gasto={gasto}
                setGasto={setGasto}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValid={setIsValid}

              />

              <Formulario
                gastos={gastos}
                setGastos={setGastos}
                gasto={gasto}
                setGasto={setGasto}
              />

              <ListadoGastado className='py-100'
                gastos={gastos}
                setGasto={setGasto}
                eliminarGasto={eliminarGasto}
                filtro={filtro}
                setFiltro={setFiltro}
                gastosFiltrados={gastosFiltrados}
                setGastosFiltrados={setGastosFiltrados}
              />

              <FiltrarCom
                filtro={filtro}
                setFiltro={setFiltro}
              />

            </>
        }

      </div>
    </div>

  )
}

export default App


