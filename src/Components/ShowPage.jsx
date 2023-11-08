import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ShowPage() {
  const [oneCity, setOneCity] = useState("");
  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneCity();
  }, []);

  async function fetchOneCity() {
    try {
      let result = await axios.get(`${API}/cities/${id}`);
      if (!result.data.id) {
        navigate("/notfound");
      } else {
        setOneCity(result.data);
      }
      //console.log(result.data);
    } catch (error) {
      console.log(error);
      navigate("/notfound");
    }
  }

  function handleBackButton() {
    navigate("/cities");
  }

  function handleEditButton() {
    navigate(`/cities/${id}/edit`);
  }

  async function handleDeleteButton() {
    try {
      await axios.delete(`${API}/cities/${id}`);
      navigate("/cities");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="d-flex justity-content-center">
      <h2 className="mt-3 px-5">Show</h2>

      <div className="card mb-5 mt-5 " style={{ width: "1000px" }}>
        <div className="card-header fs-2 text-uppercase text-center text-secondary">
          {oneCity.name}
        </div>

        <img
          className="card-img-top"
          style={{ height: "500px" }}
          src={oneCity.image}
          alt={oneCity.name}
        />
        <div className="card-body fs-2 text-center text-secondary">
          <p className="card-text">{oneCity.population} Millions</p> <hr />
          <p className="card-text">{oneCity.area} Square Miles</p> <hr />
          <p className="card-text">{oneCity.annual_visitors} Millions</p> <hr />
          <p className="card-text">{oneCity.currency}</p> <hr />
          <p className="card-text">{oneCity.is_capital}</p>
        </div>

        <div className="m-5 d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-secondary px-5 me-5"
            onClick={handleBackButton}
          >
            BACK
          </button>
          <button
            type="button"
            className="btn btn-secondary px-5 me-5"
            onClick={handleEditButton}
          >
            EDIT
          </button>
          <button
            type="button"
            className="btn btn-secondary px-5 me-5"
            onClick={handleDeleteButton}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
