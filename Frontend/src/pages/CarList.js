import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function CarList() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCars = async () => {
    const res = await API.get("/");
    setCars(res.data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const deleteCar = async (id) => {
    await API.delete(`/${id}`);
    fetchCars();
  };

  const filteredCars = cars.filter(car =>
    car.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search by brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="grid">
        {filteredCars.map(car => (
          <div className="card" key={car._id}>
            <img src={car.image} alt={car.model} />
            <h3>{car.brand} {car.model}</h3>
            <p>₹ {car.price}</p>
            <Link to={`/car/${car._id}`}>View</Link>
            <button onClick={() => deleteCar(car._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CarList;
