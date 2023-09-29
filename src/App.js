import { Route, Routes } from "react-router";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Cyberpunk } from "./components/pages/Cyberpunk/Cyberpunk";
import { Phantom } from "./components/pages/Phantom/Phantom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cyberpunk" element={<Cyberpunk/>} />
        <Route path="/phantom" element={<Phantom/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;