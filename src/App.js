import { Route, Routes } from "react-router";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Cyberpunk } from "./components/pages/Cyberpunk/Cyberpunk";
import { Phantom } from "./components/pages/Phantom/Phantom";
import { Buy } from "./components/pages/Buy/Buy";
import { Product } from "./components/pages/Product/Product";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cyberpunk" element={<Cyberpunk/>} />
        <Route path="/phantom" element={<Phantom/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/buy/:id" element={<Product/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;