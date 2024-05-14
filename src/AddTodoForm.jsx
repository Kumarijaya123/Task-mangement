/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./AddTodoForm.module.css";
function AddTodoForm({ addTodo }) {
    const [todoTitle, setTodoTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            completed: false,
            title: todoTitle,
            id: uuid(),
        };
        addTodo(newTodo);
        setTodoTitle("");
    };
    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <input style={{backgroundColor:"#1d1d1bf6"}}
                type="text"
                name="todoTitle"
                id="todoTitle"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />
            <button style={{backgroundColor:"#146f9666"}} type="submit"> + Add Todo</button>
        </form>
    );
}

export default AddTodoForm;