/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

export function CapstonesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);

  return (
    <div className="container">
      <div id="capstones-index">
        <h2 className="text-center mb-4" style={{ fontFamily: "Sedan, serif" }}>
          All Capstones
        </h2>
        <div className="row">
          <div className="col">
            <p>
              Search by Name:
              <input
                type="text"
                value={searchFilter}
                onChange={(event) => setSearchFilter(event.target.value)}
                list="capstone-suggestions"
                className="form-control"
                placeholder="John Doe"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px primary",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
              <datalist id="capstone=suggestions">
                {props.capstones.map((capstone) => (
                  <option key={capstone.id} value={`${capstone.first_name} ${capstone.last_name}`} />
                ))}
              </datalist>
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {props.capstones
              .filter((capstone) => {
                const fullName = `${capstone.first_name} ${capstone.last_name}`;
                const searchLower = searchFilter.toLowerCase();
                return (
                  capstone.first_name.toLowerCase().includes(searchLower) ||
                  capstone.last_name.toLowerCase().includes(searchLower) ||
                  fullName.toLowerCase().includes(searchLower)
                );
              })
              .map((capstone) => (
                <div key={capstone.id} className="col mb-4">
                  <div className="card h-100 d-flex flex-column">
                    <div className="card text-center">
                      <div className="card-body">
                        <h4 className="card-title" style={{ fontFamily: "Sedan, serif", fontWeight: 900 }}>
                          {capstone.name}
                        </h4>
                        <h5>________________</h5>
                        <p className="card-text">
                          By {capstone.first_name} {capstone.last_name}
                        </p>
                        <img
                          src={capstone.screenshot}
                          className="card-img-top img-fluid"
                          style={{ height: "200px", objectFit: "cover" }}
                          alt={capstone.first_name}
                        />
                      </div>
                    </div>
                    <div className="mt Auto d-flex justify-content-center py-3">
                      <Link to={`/capstones/${capstone.id}`} className="btn btn-primary mt auto">
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
