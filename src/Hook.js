import React, { useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
export default function Hook(props) {
  const { img, img1, paragraf, sendCount } = props; // sendCount = count

  useEffect(() => {
    setIsOpen(!modalIsOpen);
  }, [sendCount]);

  const [modalIsOpen, setIsOpen] = React.useState(!sendCount);

  console.log("modal:", modalIsOpen);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="App">
          <img src={img} />
          <p>{paragraf}</p>
          <img src={img1} />
          <button onClick={closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
}
