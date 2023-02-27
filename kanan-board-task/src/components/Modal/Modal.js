import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./Modal.css";
import { useEffect } from "react";

function Modal({
  id,
  todolist,
  setTodolist,
  progressivelist,
  setProgressivelist,
  closeModal,
}) {
  const [tasktitle, setTasktitle] = useState("");
  const [taskdescription, setTaskdescription] = useState("");

  function handleInput(e) {
    const { name, value } = e.target;
    if (name === "tasktitle") setTasktitle(value);
    if (name === "taskdescription") setTaskdescription(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (tasktitle == "" || taskdescription == "") {
      alert("Blank Values Not Allowed !");
    }
    if (id == 1) {
      setTodolist([
        ...todolist,
        { btnid: id, id: nanoid(5), tasktitle, taskdescription },
      ]);
    }
    if (id == 2) {
      setProgressivelist([
        ...progressivelist,
        { btnid: id, id: nanoid(5), tasktitle, taskdescription },
      ]);
    }
    closeModal();
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "visible";
    };
  }, []);

  return (
    <>
      <div
        className="modal-wrapper"
        onClick={(event) => {
          closeModal();
        }}
      ></div>
      <div className="modal-content">
        <div className="form-heading">Add New Task</div>

        <form onSubmit={handleSubmit} className="form-add">
          <div className="input-1-container">
            <label>Task Title </label>
            <input
              type="text"
              placeholder="Type Title here !"
              name="tasktitle"
              value={tasktitle}
              onChange={handleInput}
            />
          </div>
          <div className="input-2-container">
            <label>Task Description</label>
            <textarea
              placeholder="Enter Description here !"
              cols="35"
              rows="5"
              value={taskdescription}
              name="taskdescription"
              onChange={handleInput}
              maxLength={250}
            ></textarea>
          </div>
        </form>

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Modal;
