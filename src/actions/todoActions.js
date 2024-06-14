// actions/todoActions.js
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_ALL = 'CLEAR_ALL';

export const addTodo = (id, title, description) => {
    return {
        type: ADD_TODO,
        payload: { id, title, description, completed: false }
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    };
};
