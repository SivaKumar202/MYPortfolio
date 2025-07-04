import { Routes, Route, BrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Home from "./components/Hero/Home";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/About" element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
