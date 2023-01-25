import { Routes, Route } from "react-router-dom";
import BlankPage from "./pages/BlankPage.js";
import MainPage from "./pages/MainPage.js";
import "./App.css";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

function App() {
  console.log(window.location.pathname);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="*" element={<BlankPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
