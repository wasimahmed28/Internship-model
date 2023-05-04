import React from "react";
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Services from "./pages/Services"; 
import Aboutus from "./pages/Aboutus";
import Industries from "./pages/Industries"
import Contacts from "./pages/Contacts"
import Startup from "./pages/Startups"
import Contact from './Components/Contact';
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/about" element={<Aboutus/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/industries" element={<Industries/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/startup" element={<Startup/>}/>
    </Routes>
    <Contact/>
    </div>
  );
}

export default App; 
