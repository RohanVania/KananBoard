import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import EditModal from "../Edit-Modal/EditModal";
import "./Card.css";

function Card({
  btnid,
  id,
  title,
  description,
  handleDelete,
  todolist,
  progressivelist,
  setTodolist,
  setProgressivelist,
}) {
  const [editmodalpopup, setEditmodalpopup] = useState(false);

  function openEditModal(e) {
    setEditmodalpopup(true);
  }

  function closeEditmodal() {
    setEditmodalpopup(false);
  }

  function handleremove(e) {
    handleDelete(btnid, id);
  }

  function dragstarted(
    event,
    btnid,
    id,
    todolist,
    progressivelist,
    setTodolist,
    setProgressivelist
  ) {
    event.dataTransfer.setData("cardid", id);
    event.dataTransfer.setData("btnid", btnid);
  }

  return (
    <div
      draggable
      onDragStart={(e) =>
        dragstarted(
          e,
          btnid,
          id,
          todolist,
          progressivelist,
          setTodolist,
          setProgressivelist
        )
      }
      className="draggable  card-container"
      id={btnid}
    >
      <div id={btnid} className="card-header">
        <div id={btnid} className="card-title">
          {title}
        </div>
        <div id={btnid} className="card-buttons">
          <BsTrash onClick={handleremove} className="trash" />
          <MdModeEditOutline className="edit" onClick={openEditModal} />
          {editmodalpopup && (
            <EditModal
              btnid={btnid}
              id={id}
              title={title}
              description={description}
              todolist={todolist}
              progressivelist={progressivelist}
              setTodolist={setTodolist}
              setProgressivelist={setProgressivelist}
              closeEditmodal={closeEditmodal}
            />
          )}
        </div>
      </div>
      <div id={btnid} className="card-body">
        <p id={btnid}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
