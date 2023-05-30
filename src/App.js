import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="text-4xl front-bold font-signature">
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    </div>
  );
}

export default App;
