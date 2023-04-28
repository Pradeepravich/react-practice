import React from 'react'
import './styles/style.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavbarHeader from './NavbarHeader'
import Home from './Home'
import Todolist from './Todolist'
import Weather from './Weather'
import About from './About'
import Dashboard from './Dashboard'
import Signup from './Signup'

const App = () => {

    return (
      <div>
        <BrowserRouter>
          <NavbarHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todolist />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard/:name" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    )

}

export default App