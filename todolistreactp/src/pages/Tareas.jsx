import React from 'react'
import InputTareas from '../components/AgregarTareas/InputTareas'
import TittlePage from '../components/TittlePage/TittlePage'
import ContadorTareas from '../components/ContadorTareas/ContadorTareas'
import ListaTareas from '../components/ListaTareas/ListaTareas'

function Tareas() {
  return (
    <div>Tareas
        <TittlePage />
        <InputTareas />
        <ContadorTareas />
        <ListaTareas />
    </div>
  )
}

export default Tareas