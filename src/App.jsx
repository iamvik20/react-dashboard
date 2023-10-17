import { useState } from 'react';
import './App.css';
import Homepage from './Pages/Homepage';
import Sidebar from './components/SideBar';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
    <div className='grid-container'>
      <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Homepage OpenSidebar={OpenSidebar}/>
    </div>
  )
}

export default App
