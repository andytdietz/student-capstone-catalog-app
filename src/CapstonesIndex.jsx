import { useState } from "react";

export function CapstonesIndex(props) {
  <div>
    <h1> All Capstones:</h1>
    <div>
      {props.capstones.map((capstone) => (
        <div key={capstone.id}>
          <h2>{}</h2>
        </div>
      ))}
    </div>
  </div>;
}
