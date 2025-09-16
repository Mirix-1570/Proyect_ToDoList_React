import React from 'react'
import './estilos.css'

// Placeholder: más adelante recibirá props con las tareas
function ListaTareas({ items = [] }) {
  if (items.length === 0) {
    return (
      <div className="empty">
        <p className="empty__text">No hay tareas aún. ¡Agrega la primera!</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {items.map((t) => (
        <li key={t.id} className="todo-item">
          <label className="todo-item__main">
            <input type="checkbox" checked={!!t.done} onChange={() => {}} />
            <span className={t.done ? 'todo-item__text done' : 'todo-item__text'}>
              {t.text}
            </span>
          </label>
          <button className="todo-item__remove" aria-label="Eliminar" title="Eliminar">✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ListaTareas