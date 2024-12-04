import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./componnets/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
