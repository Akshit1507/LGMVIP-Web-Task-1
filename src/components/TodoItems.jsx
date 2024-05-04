import styles from "./TodoItems.module.css";
import TodoItem from "./TodoItem.jsx";
let TodoItems = ({items,onDelete}) =>{
    return(
        <div className={styles.itemsContainer}>
            {items.map((item)=>(
                <TodoItem todoName={item.todoName} todoDueDate={item.date} onDelete={onDelete}></TodoItem>
            ))}
        </div>
    )
}
export default TodoItems;