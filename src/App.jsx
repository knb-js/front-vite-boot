import { Login } from './components/Login'
import './index.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage":"url('../src/images/lamboblue.jpg')"}}>
        <Routes>
          <Route path='login' element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
