import axios from "axios";
import { useState, useEffect } from "react";
import { CapstonesIndex } from "./CapstonesIndex";
// import { CapstonesShow } from "./CapstonesShow";
import { CapstonesShowPage } from "./CapstonesShowPage";
// import capstones from "./data/dummyData";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [capstones, setCapstones] = useState([]);
  const [isCapstonesShowVisible, setIsCapstonesShowVisible] = useState(false);
  const [currentCapstone, setCurrentCapstone] = useState({});

  const handleIndexCapstones = () => {
    console.log("handleIndexCapstones");
    axios.get("http://localhost:3000/capstones.json").then((response) => {
      console.log(response.data);
      setCapstones(response.data);
    });
  };
  const handleShowCapstone = (capstone) => {
    console.log("handleShowCapstone", capstone);
    setIsCapstonesShowVisible(true);
    setCurrentCapstone(capstone);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsCapstonesShowVisible(false);
  };

  useState(handleIndexCapstones);

  return (
    <div
      className="p-3 mb-2 bg-primary-subtle
    text-primary-emphasis"
    >
      <Routes>
        <Route path="/" element={<CapstonesIndex capstones={capstones} onShowCapstone={handleShowCapstone} />} />
        <Route path="/capstones/:id" element={<CapstonesShowPage />} />
      </Routes>
      {/* <Modal show={isCapstonesShowVisible} onClose={handleClose}>
        <CapstonesShow capstone={currentCapstone} />
      </Modal> */}
    </div>
  );
}
