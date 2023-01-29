import { Routes, Route } from "react-router-dom";
import BlankPage from "./pages/BlankPage.js";
import MainPage from "./pages/MainPage.js";
import "./App.css";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import ParfumPage from "./pages/ParfumPage.js";
import PerawatanWajahPage from "./pages/PerawatanWajahPage.js";
import PaketKecantikanPage from "./pages/PaketKecantikanPage.js";

function App() {
  console.log(window.location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="*" element={<BlankPage />} />
          <Route path="parfum" element={<ParfumPage />} />
          <Route path="wajah" element={<PerawatanWajahPage />} />
          <Route path="paket" element={<PaketKecantikanPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
