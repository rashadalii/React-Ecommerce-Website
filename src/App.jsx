import './App.css'
import { Outlet } from 'react-router-dom'
import Navitems from './components/Navitems';

function App() {


  return (
   <>
   <Navitems/>
   <Outlet/>
  </>  
  )
}

export default App;
