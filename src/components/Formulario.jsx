import React from 'react'

function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="mascota">Mascota</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" id='mascota' placeholder='nombre de la mascota' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre Propietario</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" id='propietario' placeholder='Nombre del propietario' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email" id='email' placeholder='Email contacto propietario' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Fecha de Alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date" id='alta' placeholder='Fecha de Alta' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="sintomas" placeholder='Describre los sintomas'></textarea>
        </div>

        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer' value="Agregar Paciente" />
        
      </form>
    </div>
  )
}

export default Formulario