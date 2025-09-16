import React from 'react'
import './estilos.css'

// Nota: más adelante se puede leer el total desde props o contexto global
function ContadorTareas({ total = 0, completadas = 0 }) {
  return (
    <div className="counter">
      <span className="counter__label">Tareas:</span>
      <span className="counter__badge" title="Totales">{total}</span>
      <span className="counter__sep">/</span>
      <span className="counter__badge counter__badge--ok" title="Completadas">{completadas}</span>
    </div>
  )
}

export default ContadorTareas