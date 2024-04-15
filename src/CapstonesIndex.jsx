/* eslint-disable react/prop-types */
import { useState } from "react";

export function CapstonesIndex(props) {
  return (
    <div>
      <h1> All Capstones:</h1>
      <div id="capstones-index">
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-5">
            {props.capstones.map((capstone) => (
              <div key={capstone.id}>
                {console.log(capstone)}
                <h2>{capstone.name}</h2>
                <h2>{capstone.capstone_project_name}</h2>
                <img src={capstone.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
