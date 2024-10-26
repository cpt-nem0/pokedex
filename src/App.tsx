import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Pokedex from "./components/pages/Pokedex";
import Header from "./components/common/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen md:gap-8">
      <Header />
      <main className="flex flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
