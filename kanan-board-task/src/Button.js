import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import { BsPlusLg } from "react-icons/bs";

function Button({
  id,
  todolist,
  setTodolist,
  progressivelist,
  setProgressivelist,
}) {
  const [modalpopup, setModalpopup] = useState(false);

  function closeModal() {
    setModalpopup(false);
  }

  return (
    <>
      <button
        className="add-button"
        onClick={(e) => {
          setModalpopup(true);
        }}
      >
        <BsPlusLg className="plusicon" />
        Add
      </button>
      {modalpopup && (
        <Modal
          id={id}
          todolist={todolist}
          setTodolist={setTodolist}
          progressivelist={progressivelist}
          setProgressivelist={setProgressivelist}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default Button;
