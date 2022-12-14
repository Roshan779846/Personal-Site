import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Experience  from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Portfolio from "./components/Portfolio/Potfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" 
    style={{ background: darkMode? 'black': '', 
    color : darkMode? 'white': '' }}>
      <NavBar />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );

}

export default App;
