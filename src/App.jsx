import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Home from "./components/Hero/Home";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Skills" element={<Skills/>}/>
    </Routes>
  );
}

export default App;
