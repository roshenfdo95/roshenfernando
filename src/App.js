import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/AnimatedHeader";
import About from "./components/About";
import Project from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Scroll from './components/Scroll';

function App() {
  return (
    <BrowserRouter>
    <Scroll/>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/About" element={<About/>} /> 
        <Route path="/Project" element={<Project/>} />  
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
