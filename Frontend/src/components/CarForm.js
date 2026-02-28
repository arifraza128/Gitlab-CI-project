import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function CarForm() {
  const navigate = useNavigate();

  const [car, setCar] = useState({
    brand: "",
    model: "",
    price: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", car);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="brand" placeholder="Brand" onChange={handleChange} required />
      <input name="model" placeholder="Model" onChange={handleChange} required />
      <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
      <input name="image" placeholder="Image URL" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <button type="submit">Add Car</button>
    </form>
  );
}

export default CarForm;
