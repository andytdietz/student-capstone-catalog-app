/* eslint-disable react/prop-types */

export function CapstonesShow(props) {
  return (
    <div id="capstones-show">
      <h1>Capstone Information</h1>
      <p>
        Name: {props.capstone.first_name} {props.capstone.last_name}
      </p>
      <p>Capstone Project: {props.capstone.name}</p>
      <p>Description: {props.capstone.description}</p>
    </div>
  );
}
