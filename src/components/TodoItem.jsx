function TodoItem({ todoName, todoDueDate, onDelete }) {
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDueDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => onDelete(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
