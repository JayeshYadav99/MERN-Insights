import { useState } from 'react'

import './App.css'
import Insights from './Pages/Insights'
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Incorrect from './Components/FirstInsight.jsx/Incorrect';
import Correct from './Components/FirstInsight.jsx/Correct';
function App() {


  return (
    
     <>         <Routes>

     <Route path="/" element={<Homepage />}></Route>
     <Route path="/Incorrect" element={<Incorrect />}></Route>
     <Route path="/Correct" element={<Correct />}></Route>
     </Routes>
     </> 
       

    
  )
}

export default App
