import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AddEvent from './components/AddEvent';
import Form from './components/Form';
import './App.css';




function App() {
  return (
  <Router>
    
   <Routes>
   <Route path="/" element={<AddEvent/>} />
    <Route path="form" element={<Form />}></Route>
  
   
   
   </Routes>
   {/* <AddEvent/> */}

   
 
   

    </Router>
  )
}

export default App
