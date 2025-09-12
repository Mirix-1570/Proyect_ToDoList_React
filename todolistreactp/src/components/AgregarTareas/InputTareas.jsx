import React, { useState } from 'react'
import './estilos.css'

function InputTareas() {

  const [tarea, setTarea] = useState("")

  function ingresarTarea() {
    console.log("Aquí van mis acciones");
    
  }

  return (
    <div>InputTareas
      
      <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)}/> <br />
      <button onClick={() => ingresarTarea}>Agregar</button>
      
    </div>
  )
}

export default InputTareas