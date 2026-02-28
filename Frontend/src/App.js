import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddCar from "./pages/AddCar";
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCar />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
