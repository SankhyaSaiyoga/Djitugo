import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
    </>
  );
}

export default App;
