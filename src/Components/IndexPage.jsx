import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function IndexPage() {
  const API = import.meta.env.VITE_API_URL;
  const [allcities, setAllCities] = useState([]);

  useEffect(() => {
    fetchAllCities();
  }, []);

  async function fetchAllCities() {
    try {
      let result = await axios.get(`${API}/cities`);
      console.log(result.data);
      setAllCities(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="px-5"
      style={{
        border: "2px solid grey",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "space-evenly",
        margin: "5px",
      }}
    >
      {allcities.map((item) => {
        return (
          <div
            key={item.id}
            className="card mb-5 mt-5"
            style={{ width: "700px" }}
          >
            <Link
              to={`/cities/${item.id}`}
              style={{ textDecorationColor: "grey" }}
            >
              <div className="card-header fs-2 text-uppercase text-center text-secondary">
                {item.name}
              </div>

              <img
                className="card-img-top"
                style={{ height: "500px" }}
                src={item.image}
                alt={item.name}
              />
              <div className="card-body fs-2 text-center text-secondary">
                <p className="card-text">
                  {item.annual_visitors} Million Visitors
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default IndexPage;
