import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRouteWrapper from "@/routes/index";
import AboutRouteWrapper from "@/routes/about";
import ServicesRouteWrapper from "@/routes/services";
import ProductsRouteWrapper from "@/routes/products";
import GalleryRouteWrapper from "@/routes/gallery";
import ContactRouteWrapper from "@/routes/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRouteWrapper />} />
        <Route path="/about" element={<AboutRouteWrapper />} />
        <Route path="/services" element={<ServicesRouteWrapper />} />
        <Route path="/products" element={<ProductsRouteWrapper />} />
        <Route path="/gallery" element={<GalleryRouteWrapper />} />
        <Route path="/contact" element={<ContactRouteWrapper />} />
        <Route path="*" element={<HomeRouteWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
