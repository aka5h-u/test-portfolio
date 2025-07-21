import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import BrandDetail from "./components/BrandDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="*" element={<Not f />} /> */}
        <Route path="/brands/:brandName" element={<BrandDetail />} />
      </Routes>
    </>
  );
}

export default App;
