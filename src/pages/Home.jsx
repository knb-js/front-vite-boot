import { Link } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";

export const Home = () => {
  return (
    <main>
      <header
        className="bg-zinc-950 py-3 px-10 flex items-center fixed top-0 w-full justify-between z-40 text-white"
      >
        <div className="flex flex-grow basis-0">
          <img  className="h-18 w-28" src="./src/logo/viteboot-logo.png"/>
        </div>
        <nav>
          <ul className="flex text-base [&>li>a]:inline-block [&>li>a]:px-4">
            <li><a href="" className='hover:text-cyan-500 transition-colors duration-300'>Nosotros</a></li>
            <li><a href="" className='hover:text-cyan-500 transition-colors duration-300'>Modelos</a></li>
            <li><a href="" className='hover:text-cyan-500 transition-colors duration-300'>Servicios</a></li>
            <li><a href="" className='hover:text-cyan-500 transition-colors duration-300'>Contáctanos</a></li>
          </ul>
        </nav>
        <nav className="flex flex-grow justify-end basis-0">
          <ul className="flex text-base [&>li>a]:inline-block [&>li>a]:px-4">
            <li><a href="" ><Link to="/login" className='hover:text-cyan-500 transition-colors duration-300'>Ingresar</Link></a></li>
            <li><a href="" ><Link to="/register" className='hover:text-cyan-500 transition-colors duration-300'>Registrarse</Link></a></li>
            <li><a href="" className='hover:text-cyan-500 transition-colors duration-300'>Soporte</a></li>
            <li><a href="" className='hover:text-cyan-500 transition-colors duration-300'>Tienda</a></li>
            <li><a href=""><LuLogOut className='text-2xl hover:text-cyan-500 transition-colors duration-300' /></a></li>
          </ul>
        </nav>
      </header>

      <section
        className="bg-black h-screen w-screen text-center relative overflow-hidden"
      >
        {/* <h2>Disfrute de tesla</h2>
        <p>Hola como estas jeje</p>
        <a href=""> Prueba de conducción</a>
        <div className="absolute top-0 bottom-0"> */}
          <video autoPlay muted loop src="./src/videos/video.mp4"></video>
        {/* </div> */}
      </section>
	</main>
  )
}
