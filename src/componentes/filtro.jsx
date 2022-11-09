import {useState, useEffect} from 'react'

const FiltrarCom = ({filtro,setFiltro}) => {
  return (
   
    <div style={{
      position: 'absolute',
      left: '73%',
      top: '80%',
      transform: 'translate(-50%, -50%)'
  }}
      className="md:w-1/2 mx-4 lq:w-1/4 text-center">
        <label>Filtrar Gastos</label> <br/>
    <select name="Seleccione" id="categoria" className='w-60 text-center p-3 rounded-lg '
     value={filtro} 
     onChange={(e) => setFiltro(e.target.value)}>
    <option value="">--Todos--</option>
    <option value="Ahorro">Ahorro</option>
    <option value="Comida">Comida</option>
    <option value="Casa">Casa</option>
    <option value="GastosVarios">Gastos Varios</option>
    <option value="Ocio">Ocio</option>
    <option value="Salud">Salud</option>
    <option value="Suscripcion">Suscripcion</option>
</select>
</div>
  )
}

export default FiltrarCom