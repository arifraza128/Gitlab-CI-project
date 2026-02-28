import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      const res = await API.get(`/${id}`);
      setCar(res.data);
    };
    fetchCar();
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div className="container">
      <img src={car.image} alt={car.model} className="detail-img"/>
      <h2>{car.brand} {car.model}</h2>
      <h3>₹ {car.price}</h3>
      <p>{car.description}</p>
    </div>
  );
}

export default CarDetails;
