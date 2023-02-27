import React, { useState } from "react";
import "./EditModal.css";

import { useEffect } from "react";

function EditModal({
  btnid,
  id,
  title,
  description,
  closeEditmodal,
  todolist,
  progressivelist,
  setTodolist,
  setProgressivelist,
}) {
  const [tasktitle, setTasktitle] = useState(title);
  const [taskdescription, setTaskdescription] = useState(description);

  function handleInput(e) {
    const { name, value } = e.target;
    if (name === "tasktitle") setTasktitle(value);
    if (name === "taskdescription") setTaskdescription(value);
  }

  function handleUpdate(e) {
    e.preventDefault();
    if (tasktitle == "" || taskdescription == "") {
      alert("Blank Values Not Allowed !");
    }
    if (btnid == 1) {
      const index = todolist.map((element) => element.id).indexOf(id);
      const updateelement = { btnid, id, tasktitle, taskdescription };
      todolist.splice(index, 1, updateelement);
      setTodolist([...todolist]);
    }
    if (btnid == 2) {
      const index = progressivelist.map((element) => element.id).indexOf(id);
      const updateelement = { btnid, id, tasktitle, taskdescription };
      progressivelist.splice(index, 1, updateelement);
      setProgressivelist([...progressivelist]);
    }
    closeEditmodal();
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
        onClick={(e) => {
          closeEditmodal();
        }}
      ></div>
      <div className="modal-content">
        <div className="form-heading">Edit Task</div>

        <form onSubmit={handleUpdate} className="form-add">
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

        <button className="btn" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </>
  );
}

export default EditModal;
