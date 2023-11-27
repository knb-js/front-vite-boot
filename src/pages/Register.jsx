import { Link } from 'react-router-dom';
import { useState } from 'react';
import ClientService from '../services/ClientService';
import Swal from 'sweetalert2';

export const Register = () => {

    const [rut,setRut] = useState('');
    const [dv,setDv] = useState('');
    const [name,setName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');

    const registerClientUser = (e) =>{
        e.preventDefault();
        const client = { rut, dv, name, lastName, email, password, phone }
        ClientService.registerClientUser(client).then((response)=>{
            console.log(response.data)
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Usuario registrado con éxito!",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch(error=>{
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Error!!!",
                text: "no se ha registrado el usuario!"
            });
        });
    }


    return (
        <div>
            <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
                <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Regístrate</h1>
                <form action="">
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={ rut }
                            onChange={ (e) => setRut(e.target.value) }
                            />
                        <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Rut</label>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={ dv }
                            onChange={ (e) => setDv(e.target.value) }
                            />
                        <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Dv</label>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={ name }
                            onChange={ (e) => setName(e.target.value) }
                            />
                        <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Nombre</label>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={ lastName }
                            onChange={ (e) => setLastName(e.target.value) }
                            />
                        <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Apellido</label>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                            />
                        <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Correo</label>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={ password }
                            onChange={ (e) => setPassword(e.target.value) }
                            />
                        <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Contraseña</label>
                    </div>
                    <div className='relative my-4'>
                        <input 
                            type="text" 
                            className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
                            placeholder=''
                            value={ phone }
                            onChange={ (e) => setPhone(e.target.value) }
                            />
                        <label htmlFor="" className='text-lg text-whitefont-bold text-center mb-6'>Numero celular</label>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <button 
                            className="bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 text-white font-bold py-2 px-4 rounded"
                            onClick={ (e) => registerClientUser(e)}
                        >registrarse</button>
                    </div>
                    <div className='mb-4'>
                        <span><Link to="/login" className='text-lg text-whitefont-bold text-center mb-6 hover:text-cyan-500 transition-colors duration-300'>iniciar sesión</Link> </span>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
