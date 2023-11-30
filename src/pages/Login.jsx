
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ClientService from '../services/ClientService';
import Swal from 'sweetalert2';

export const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginUser = (e) =>{
        e.preventDefault();
        const client = { email, password }
        ClientService.loginUser(client).then((response)=>{
            console.log(response.data)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Iniciando sesión!",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch(error=>{
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Error!!!",
                text: "usuario o contraseña incorrecto"
            });
        });
    }

    return (
        <div>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Bienvenido</h1>
                <form action="">
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className=' block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <label htmlFor="" className='flex items-center justify-center text-lg text-whitefont-bold text-center mb-6'>Correo</label>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={password}
                            onChange={ (e) => setPassword(e.target.value) }
                            />
                        <label htmlFor="" className='flex items-center justify-center text-lg text-whitefont-bold text-center mb-6'>Contraseña</label>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <button 
                            className="bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded"
                            onClick={ (e) => loginUser(e) }
                            >iniciar sesión</button>
                    </div>
                    <div className='flex items-center justify-center mb-4'>
                        {/* <div>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="Remember"></label>
                        </div> */}

                        <button 
                            type="submit" 
                            className='hover:text-cyan-500 transition-colors duration-300'
                            >recuperar contraseña</button>
                    </div>
                    <div className='flex items-center justify-center mb-4'>
                        <span>Eres nuevo? <Link to="/register" className='hover:text-cyan-500 transition-colors duration-300'>regístrate aquí</Link> </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
