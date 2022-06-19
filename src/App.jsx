import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'
import Footer from './Components/layout/footer'
import Navbar from './Components/layout/Navbar'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import Home from './pages/Home'

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/Empresa' element={<Empresa />} />
      <Route path='/Contato' element={<Contato />} />
      </Routes>
      <Footer/>
    </Router>


  )
}

export default App