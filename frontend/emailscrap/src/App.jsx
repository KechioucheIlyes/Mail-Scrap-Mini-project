
import { Home } from '../Pages/Home/Home'
import { Navbar } from '../components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {


  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} > </Route>
      </Routes>
    </Router>

  )
}

export default App
