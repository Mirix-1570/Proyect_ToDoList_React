import React, { useState } from 'react'
import './estilos.css'

function InputTareas() {
  const [tarea, setTarea] = useState("")

  function ingresarTarea(e) {
    if (e) e.preventDefault()
    const value = tarea.trim()
    if (!value) return
    // TODO: conectar con backend/lista global
    console.log("Agregar tarea:", value)
    setTarea("")
  }

  return (
    <form className="add-todo" onSubmit={ingresarTarea}>
      <input
        className="add-todo__input"
        type="text"
        placeholder="Escribe una tarea..."
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <button className="add-todo__btn" type="submit">Agregar</button>
    </form>
  )
}

export default InputTareas