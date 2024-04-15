/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

export function CapstonesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);

  return (
    <div>
      <div id="capstones-index">
        <h2> All Capstones:</h2>
        <p>
          Search by Name
          <input
            type="text"
            value={searchFilter}
            onChange={(event) => setSearchFilter(event.target.value)}
            list="capstone-suggestions"
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "5px",
            }}
          />
          <datalist id="capstone=suggestions">
            {props.capstones.map((capstone) => (
              <option key={capstone.id} value={capstone.name} />
            ))}
          </datalist>
        </p>
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {props.capstones
              .filter((capstones) => capstones.name.toLowerCase().includes(searchFilter.toLowerCase()))
              .map((capstone) => (
                <div key={capstone.id} className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{capstone.capstone_project_name}</h5>
                      <p className="card-text">By {capstone.name}</p>
                      <img src={capstone.screenshot} className="card-img-top" alt={capstone.name} />
                      <Link to={`/capstones/${capstone.id}`} className="btn btn-primary">
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
