import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GameDetailPage from "./pages/GameDetailPage.jsx";
import GamesPage from "./pages/GamesPage.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import StudioPage from "./pages/StudioPage.jsx";

function RouteContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/games/:slug" element={<GameDetailPage />} />
      <Route path="/studio" element={<StudioPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteContent />
      <Footer />
    </BrowserRouter>
  );
}
