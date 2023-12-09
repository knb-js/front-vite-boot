
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
            <li><a href="">Model S</a></li>
            <li><a href="">Model 3</a></li>
            <li><a href="">Model X</a></li>
            <li><a href="">Model Y</a></li>
            <li><a href="">Powerwall</a></li>
            <li><a href="">Carga</a></li>
          </ul>
        </nav>
        <nav className="flex flex-grow justify-end basis-0">
          <ul className="flex text-base [&>li>a]:inline-block [&>li>a]:px-4">
            <li><a href="">Soporte</a></li>
            <li><a href="">Tienda</a></li>
            <li><a href="">Cuenta</a></li>
            <li><a href="">Menú</a></li>
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
