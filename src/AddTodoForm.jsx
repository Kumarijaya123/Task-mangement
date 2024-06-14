/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from "uuid";
import styles from "./AddTodoForm.module.css";

function AddTodoForm({ addTodo }) {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            completed: false,
            title: todoTitle,
            description: todoDescription,
            id: uuid(),
        };
        addTodo(newTodo);
        setTodoTitle("");
        setTodoDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
            <input
                style={{ backgroundColor: "#1d1d1bf6" }}
                type="text"
                name="todoTitle"
                id="todoTitle"
                placeholder="Title"
                value={todoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
            />
            <input
                style={{ backgroundColor: "#1d1d1bf6" }}
                type="text"
                name="todoDescription"
                id="todoDescription"
                placeholder="Description"
                value={todoDescription}
                onChange={(e) => setTodoDescription(e.target.value)}
            />
            <button style={{ backgroundColor: "#146f9666" }} type="submit">
                + Add 
            </button>
        </form>
    );
}

export default AddTodoForm;
