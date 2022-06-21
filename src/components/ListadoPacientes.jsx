import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({pacientes, setPaciente}) {
  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {/* Comprobrar si hay o no datos en el array */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
          </p>

          {/* Recorrer el arreglo y enviarlo a Paciente.jsx para listarlo */}
          { pacientes.map( paciente => (
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando pacientes {''}
            <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>
          </p>
        </>
      )}
      
        
    </div>
  )
}

export default ListadoPacientes