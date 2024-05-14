import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, CLEAR_ALL } from '../actions/todoActions';

const initialState = {
    todos: [
        { id: 1, title: "Go for morning run", completed: true },
        { id: 2, title: "Teach react to students", completed: false },
        { id: 3, title: "Fix bugs of codprog website", completed: false },
    ],
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case CLEAR_ALL:
            return {
                ...state,
                todos: [],
            };
        default:
            return state;
    }
};

export default TodoReducer;
