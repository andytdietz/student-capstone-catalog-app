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
      <div className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
        <CapstonesIndex capstones={capstonesData} onShowCapstone={handleShowCapstone} />
        <Modal show={isCapstonesShowVisible} onClose={handleClose}>
          <CapstonesShow capstone={currentCapstone} />
        </Modal>
      </div>
    </main>
  );
}
