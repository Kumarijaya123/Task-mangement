import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import AddTodoForm from "./AddTodoForm";
import styles from "./TodoApp.module.css";

function App() {
    const [todos, setTodos] = useState(() => {
        // Load todos from localStorage if available
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [
            { id: 1, title: "Go for morning run", description: "Run 5 kilometers", completed: true },
            { id: 2, title: "Teach react to students", description: "Cover hooks and lifecycle methods", completed: false },
            { id: 3, title: "Fix bugs of codprog website", description: "Resolve issues reported by QA", completed: false },
        ];
    });

    useEffect(() => {
        // Save todos to localStorage whenever todos state changes
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function deleteTodo(id) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    function toggleCompleted(id) {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    }

    function addTodo(newTodo) {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    function updateTodo(id, newTitle, newDescription) {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, title: newTitle, description: newDescription };
                } else {
                    return todo;
                }
            });
        });
    }

    function clearAll() {
        setTodos([]);
    }

    return (
        <div className={styles.todoApp}>
            <h1 className="todotext">Task Management</h1>
            <AddTodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    {...todo}  // This spreads the todo object including the description
                    deleteTodo={deleteTodo}
                    toggleCompleted={toggleCompleted}
                    updateTodo={updateTodo} // Pass the updateTodo function
                />
            ))}
            {todos.length > 0 && <button style={{backgroundColor:"#78b0aa66"}} onClick={clearAll}>Clear All</button>}
        </div>
    );
}

export default App;
