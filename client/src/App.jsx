
import './App.css'
import Home from './component/Home'
import Registration from './component/Registration'
import Signup from './component/Signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
       <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/home" element={<Home />} />
            </Routes>
    </BrowserRouter>
  )
}

export default App
