import { Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/Kelaspage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratPage from "./pages/SyaratPage";
import FaqPage from "./pages/FaqPage";


function App() {

return <div>
  <NavbarComponents />
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/kelas" Component={KelasPage} />
    <Route path="/testimonial" Component={TestimonialPage} />
    <Route path="/syaratketen" Component={SyaratPage} />
    <Route path="/faq" Component={FaqPage} />
  </Routes>

  <Footer />
</div>
}

export default App
