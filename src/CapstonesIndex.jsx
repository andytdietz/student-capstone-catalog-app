import { useState } from "react";

export function CapstonesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  console.log(props);
  return (
    <div id="capstones-index">
      <h1>All capstones</h1>
      <h1>Search Filter:</h1>{" "}
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="titles" />
      <datalist id="titles">
        {props.capstones.map((capstone) => (
          <option key={capstone.id} value={capstone.title} />
        ))}
      </datalist>
      {/* new cards */}
      <div className="row row-cols-md-2 g-4">
        <div className="col">
          {props.capstones
            .filter((capstone) => capstone.title.toLowerCase().includes(searchFilter.toLocaleLowerCase()))
            .map((capstone) => (
              <div key={capstone.id} className="card border-primary mb-3">
                <img src={capstone.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{capstone.title}</h5>
                  <p className="card-text">Student: {capstone.student}</p>
                  <button onClick={() => props.onShowCapstone(capstone)} className="btn btn-primary">
                    More info
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
