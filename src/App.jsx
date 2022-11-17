import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <ParticleBg />
            <Navbar />
            <Home />
            <Projects />
        </div>
    );
}

export default App;
