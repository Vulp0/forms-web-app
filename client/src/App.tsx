import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Browse from './Browse';
import Dashboard from './Dashboard';
import TemplateInfo from './TemplateInfo';

function App() {

  return (
    <div id='contain'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/browse' element={<Browse />}></Route>
        <Route path='/template/:templateId' element={<TemplateInfo />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  )
}

export default App
