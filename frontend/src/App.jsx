import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './Main.css'

//pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar.jsx'
import CreateNotes from './pages/NewWork.jsx'
import Work from './pages/Work.jsx'
import Template from './pages/Templates.jsx'

function App() {
  return (
  <div id = "outer" className = 'App'>
    <BrowserRouter>
      <Navbar />
      <div id = "pages" class ="wrapper">
        <Routes id>
          <Route
            path = "/"
            element = {<Home/>}
          />
          <Route
            path = "/new"
            element = {<CreateNotes/>}
            />
          <Route
            path = "/work"
            element = {<Work/>}
            />
          <Route
            path = "/template"
            element = {<Template/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
  </div>
  )
}

export default App
