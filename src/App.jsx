import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
    return (
        <div className="App">
            <ParticleBg />
            <Navbar />
            <Home />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
