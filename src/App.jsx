import { Login } from './pages/Login'
import { Register } from './pages/Register'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage":"url('../src/images/bluelambo.jpg')"}}>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='home' element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
