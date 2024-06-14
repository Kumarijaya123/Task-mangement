/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from "./Todo.module.css";

function Todo({ id, title, description, completed, deleteTodo, toggleCompleted, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [addedTime] = useState(new Date().toLocaleString());

    const handleSave = () => {
        updateTodo(id, newTitle, newDescription);
        setIsEditing(false);
    };

    return (
        <div className={styles.todo}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        style={{ fontSize: "16px", padding: "8px", marginBottom: "10px" , borderRadius:"0.7rem"}}
                    />
                    <input
                        type="text"
                        value={newDescription} 
                        onChange={(e) => setNewDescription(e.target.value)}
                        style={{ fontSize: "16px", padding: "8px", marginBottom: "10px" , borderRadius:"0.7rem"}}
                    />
                    <button onClick={handleSave} style={{background:"#12acae66", width:"100px", margin:"10px"}}>Save</button>
                    <button onClick={() => setIsEditing(false)} style={{background:"#f00", width:"100px", margin:"10px"}}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h2 className={completed ? styles.completed : null}>
                        {title} - {addedTime}
                    </h2>
                    <p style={{fontSize:"20px"}}>{description}</p>
                    <div className={styles.buttonWrapper}>
                        <button
                            className="delete"
                            onClick={() => deleteTodo(id)}
                            style={{background:"#0afbba66", width:"100px", margin:"10px"}}
                        >
                            Delete
                        </button>
                        <button
                            className="done"
                            onClick={() => toggleCompleted(id)}
                            style={{background:"#12acae66", width:"100px"}}
                        >
                            {completed ? "Undone" : "Done"}
                        </button>
                        <button
                            className="edit"
                            onClick={() => setIsEditing(true)}
                            style={{background:"#c3820a", width:"100px", margin:"10px"}}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Todo;
