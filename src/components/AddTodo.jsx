import { useState } from "react";
function AddTodo({ onNewItem }) {
  let [todoName, setTodoName] = useState();
  let [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButton = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter To-do here"
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-button"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
