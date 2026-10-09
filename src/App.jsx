import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import GamesPage from "./pages/GamesPage.jsx";
import HeningPage from "./pages/HeningPage.jsx";
import StudioPage from "./pages/StudioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";
function RouteContent() {
 const location=useLocation();
 React.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"});},[location.pathname]);
 return <Routes><Route path="/" element={<Home/>}/><Route path="/games" element={<GamesPage/>}/><Route path="/games/hening" element={<HeningPage/>}/><Route path="/studio" element={<StudioPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="*" element={<NotFound/>}/></Routes>;
}
export default function App(){return <BrowserRouter><Header/><RouteContent/><Footer/></BrowserRouter>;}