import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow-1 container py-5 mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer /> 
    </Router>
  )
}

export default App;
