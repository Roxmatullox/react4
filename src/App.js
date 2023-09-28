import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import All from "./pages/all";
import Electronics from "./pages/electronics";
import Mens from "./pages/mens";
import Womens from "./pages/womens";
import Jewelery from "./pages/jewelery";

function App() {
  return (
      <BrowserRouter>
      <Header />
        <Routes >
          <Route path="/" element={<All />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
        </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
