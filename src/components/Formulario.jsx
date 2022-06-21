import { useState, useEffect } from 'react';
import Error from './Error'

function Formulario({ pacientes, setPacientes, paciente }) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    // comprobar si el arreglo esta vacio
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]);

  function generarId (){
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if([nombre, propietario, email, alta, sintomas].includes('')){
      console.log('Hay al menos un campo vacio');
      setError(true);
      return;
    }

    setError(false);

    // objeto en memoria de lo que se lee en el formulario de paciente
    const objetoPaciente = {
      nombre, 
      propietario,
      email,
      alta,
      sintomas
    }

    if(paciente.id){
      // editando el registro
      objetoPaciente.id = paciente.id;
    }else{ // nuevo registro
      // tomar la copia de lo que ya existe y agregar un nuevo objeto y no reemplazar lo que ya existe 
      // y cuando se genera el nuevo arreglo se almacena con setPacientes
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // reiniciar form
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }
  

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' onSubmit={handleSubmit}>
        { error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="mascota">nombre Mascota</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" id='mascota' placeholder='nombre de la mascota' value={nombre} onChange={ (e) => setNombre(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="propietario">Nombre Propietario</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="text" id='propietario' placeholder='Nombre del propietario' value={propietario} onChange={ (e) => setPropietario(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="email" id='email' placeholder='Email contacto propietario' value={email} onChange={ (e) => setEmail(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">Fecha de Alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' type="date" id='alta' placeholder='Fecha de Alta' value={alta} onChange={ (e) => setAlta(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">Sintomas</label>
          <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' id="sintomas" placeholder='Describre los sintomas' value={sintomas} onChange={ (e) => setSintomas(e.target.value)}></textarea>
        </div>

        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer' value={ paciente.id ? 'Editar Paciente' : 'Agregar Parciente' } />
        
      </form>
    </div>
  )
}

export default Formulario