import { Login } from './components/Login'
import { Register } from './components/Register'
import './index.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage":"url('../src/images/bluelambo.jpg')"}}>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
