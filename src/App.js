import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Players from "./components/Players/Players";
import Footer from "./components/Footer/Footer.js";
import { Routes, Route } from "react-router-dom";
import { PlayerDetail } from "./components/PlayerDetail/PlayerDetail";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Players />}></Route>
        <Route path="/detail/:id" element={<PlayerDetail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
