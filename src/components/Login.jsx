
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
        <div className='bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
            <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>
            <form action="">
                <div className='relative my-4'>
                    <input type="email" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer-[]:'/>
                    <label htmlFor="">Your Email</label>
                </div>
                <div className='relative my-4'>
                    <input type="password" className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer-[]:'/>
                    <label htmlFor="">Your Password</label>
                </div>
                <div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="Remember"></label>
                    </div>
                    <span>Forgot Password?</span>
                    <button type="submit">Login</button>
                </div>
                <div>
                    <span>New Here? <Link to="/Register">Create an Account</Link> </span>
                </div>
            </form>
        </div>
    </div>
  )
}
