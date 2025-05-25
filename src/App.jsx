import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<NotFound />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
