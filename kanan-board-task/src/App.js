import { useState } from "react";

import "./App.css";
import Button from "./Button";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
  const id1 = 1;
  const id2 = 2;
  const [todolist, setTodolist] = useState([]);
  const [progressivelist, setProgressivelist] = useState([]);

  function handleDelete(btnid, id) {
    if (btnid == 1) {
      const list1 = todolist.filter((element) => element.id != id);
      setTodolist(list1);
    } else if (btnid == 2) {
      const list2 = progressivelist.filter((element) => element.id != id);
      setProgressivelist(list2);
    }
  }

  // Drag n Drop Functionality

  function draggingover(event) {
    let btnid = event.dataTransfer.getData("btnid");

    if (event.target.id == btnid) return;
    event.preventDefault();
  }

  function dragdropped(event) {
    let transfercardid = event.dataTransfer.getData("cardid");
    let btnid = event.dataTransfer.getData("btnid");
    if (event.target.id == btnid) {
      return;
    }
    if (btnid == 1) {
      const objitem = todolist.find((element) => element.id === transfercardid);
      objitem.btnid = 2;

      const list1 = todolist.filter((element) => element.id != transfercardid);
      setTodolist(list1);

      setProgressivelist([...progressivelist, objitem]);
    } else if (btnid == 2) {
      const objitem = progressivelist.find(
        (element) => element.id === transfercardid
      );
      objitem.btnid = 1;

      const list2 = progressivelist.filter(
        (element) => element.id != transfercardid
      );
      setProgressivelist(list2);

      setTodolist([...todolist, objitem]);
    }
  }

  return (
    <div className="App">
      <Header />

      <div id="btnarea" className="btn-container">
        <Button id={id1} todolist={todolist} setTodolist={setTodolist} />
        <Button
          id={id2}
          progressivelist={progressivelist}
          setProgressivelist={setProgressivelist}
        />
      </div>
      {/* Column 1 */}

      <div className="grid-container">
        <div
          id="1"
          onDragOver={(event) => draggingover(event)}
          onDrop={(event) => dragdropped(event)}
          className="column column-todo-list"
        >
          <div className="column-todo-list-title">To Do Task</div>

          {todolist.map((element) => {
            return (
              <Card
                key={element.id}
                handleDelete={handleDelete}
                btnid={element.btnid}
                id={element.id}
                title={element.tasktitle}
                description={element.taskdescription}
                todolist={todolist}
                progressivelist={progressivelist}
                setProgressivelist={setProgressivelist}
                setTodolist={setTodolist}
              />
            );
          })}
        </div>

        {/* Column 2 */}

        <div
          id="2"
          onDragOver={(event) => draggingover(event)}
          onDrop={(event) => dragdropped(event)}
          className="column column-todo-list"
        >
          <div className="column-todo-list-title">Completed Task</div>

          {progressivelist.map((element) => {
            return (
              <Card
                key={element.id}
                handleDelete={handleDelete}
                btnid={element.btnid}
                id={element.id}
                title={element.tasktitle}
                description={element.taskdescription}
                todolist={todolist}
                progressivelist={progressivelist}
                setProgressivelist={setProgressivelist}
                setTodolist={setTodolist}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
