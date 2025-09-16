import React from 'react'
import InputTareas from '../components/AgregarTareas/InputTareas'
import TittlePage from '../components/TittlePage/TittlePage'
import ContadorTareas from '../components/ContadorTareas/ContadorTareas'
import ListaTareas from '../components/ListaTareas/ListaTareas'

function Tareas() {
  return (
    <main className="page">
      <section className="todo-card">
        <TittlePage />
        <div className="stack sm" />
        <InputTareas />
        <div className="stack sm" />
        <ContadorTareas />
        <div className="stack" />
        <ListaTareas />
      </section>
    </main>
  )
}

export default Tareas