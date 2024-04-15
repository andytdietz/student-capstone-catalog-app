import { useState } from "react";
import { CapstonesIndex } from "./CapstonesIndex";
import { CapstonesShow } from "./CapstonesShow";
import capstones from "./data/dummyData";
import { Modal } from "./Modal";

export function Content() {
  const [capstonesData, setCapstonesData] = useState([]);
  const [isCapstonesShowVisible, setIsCapstonesShowVisible] = useState(false);
  const [currentCapstone, setCurrentCapstone] = useState({});

  const handleIndexCapstones = () => {
    setCapstonesData(capstones);
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
    <main>
      <h1>Welcome to React!</h1>
      <CapstonesIndex capstones={capstonesData} onShowCapstone={handleShowCapstone} />
      <Modal show={isCapstonesShowVisible} onClose={handleClose}>
        <CapstonesShow capstone={currentCapstone} />
      </Modal>
    </main>
  );
}
