/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from "./Todo.module.css";

function Todo({ title, completed, deleteTodo, toggleCompleted, id }) {
    const [addedTime] = useState(new Date().toLocaleString());

    return (
        <div className={styles.todo}>
            <h2 className={completed ? styles.completed : null}>
                {title} - {addedTime}
            </h2>
            <div className={styles.buttonWrapper}>
                <button
                    className="delete"
                    onClick={() => {
                        deleteTodo(id);
                    }}  style={{background:"#0afbba66", width:"100px", margin:"10px"}}
                >
                    Delete
                </button>
                <button
                    className="done"
                    onClick={() => {
                        toggleCompleted(id);
                    }} style={{background:"#12acae66", width:"100px"}}
                >
                    {completed ? "Undone" : "Done"}
                </button>
            </div>
        </div>
    );
}

export default Todo;
