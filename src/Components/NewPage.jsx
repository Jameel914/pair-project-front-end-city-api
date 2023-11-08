import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewPage() {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [population, setPopulation] = useState(0);
  const [area, setArea] = useState(0);
  const [annual_visitors, setAnnual_Visitors] = useState(0);
  const [currency, setCurrency] = useState("");
  const [is_capital, setIs_Capital] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${API}/cities`, {
        name: name,
        image: image,
        population: population,
        area: area,
        annual_visitors: annual_visitors,
        currency: currency,
        is_capital: is_capital,
      });

      navigate("/cities");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className="mt-3 px-5">New</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="px-5 mt-5 fs-5 fw-bold">Name</label>
            <input
              style={{ width: "50%" }}
              className="form-control form-control-lg"
              type="text"
              aria-label=".form-control-lg example"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="px-5 mt-4 fs-5 fw-bold">Image</label>
            <input
              style={{ width: "50%" }}
              className="form-control form-control-lg"
              type="text"
              aria-label=".form-control-lg example"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <label className="px-5 mt-4 fs-5 fw-bold">Population</label>
            <input
              style={{ width: "50%" }}
              className="form-control form-control-lg"
              type="number"
              aria-label=".form-control-lg example"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
            />
          </div>
          <div>
            <label className="px-5 mt-4 fs-5 fw-bold">Area</label>
            <input
              style={{ width: "50%" }}
              className="form-control form-control-lg"
              type="number"
              aria-label=".form-control-lg example"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <div>
            <label className="px-5 mt-4 fs-5 fw-bold">Annual Visitors</label>
            <input
              style={{ width: "50%" }}
              className="form-control form-control-lg"
              type="number"
              aria-label=".form-control-lg example"
              value={annual_visitors}
              onChange={(e) => setAnnual_Visitors(e.target.value)}
            />
          </div>
          <div>
            <label className="px-5 mt-4 fs-5 fw-bold">Currency</label>
            <input
              style={{ width: "50%" }}
              className="form-control form-control-lg"
              type="text"
              aria-label=".form-control-lg example"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
          </div>
          <div>
            <label className="px-5 mt-4 fs-5 fw-bold">Is_Capital</label>
            <input
              //style={{ width: "50%" }}
              //className="form-control form-control-lg"
              type="checkbox"
              aria-label=".form-control-lg example"
              checked={is_capital}
              onChange={(e) => setIs_Capital(e.target.checked)}
            />
          </div>
          <button type="submit" className="btn btn-secondary px-5 me-5 mt-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPage;
