import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div>
        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
            <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Regístrate</h1>
            <form action="">
                <div className='relative my-4'>
                    <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
                    <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Rut</label>
                </div>
                <div className='relative my-4'>
                    <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
                    <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Dv</label>
                </div>
                <div className='relative my-4'>
                    <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
                    <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Nombre</label>
                </div>
                <div className='relative my-4'>
                    <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
                    <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Apellido</label>
                </div>
                <div className='relative my-4'>
                    <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
                    <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Correo</label>
                </div>
                <div className='relative my-4'>
                    <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' placeholder=''/>
                    <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Contraseña</label>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <button className="bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded">registrarse</button>
                </div>
                <div className='mb-4'>
                    <span><Link to="/login" className='text-lg text-whitefont-bold text-center mb-6 hover:text-cyan-500 transition-colors duration-300'>iniciar sesión</Link> </span>
                </div>
                
            </form>
        </div>
    </div>
  )
}
