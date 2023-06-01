import { useState } from "react";
import uniqid from 'uniqid';
import TodoItem from "./TodoItem";

export default function TodoList2() {
    const [todos, setTodos] = useState([
        {id: uniqid(), text: 'Party for birthday', isDone: false},
        {id: uniqid(), text: 'Menu for parents', isDone: false},
        {id: uniqid(), text: 'Menu for friends', isDone: false},
        {id: uniqid(), text: 'The bill', isDone: false},
    ]);
 
    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false,
        };

        setTodos(oldTodos => [
            ...oldTodos,
            todo
        ]);
    };

    // useEffect(() => {
    //     console.log('Mounted!');
    // }, []);

    //console.log('update');

    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    };

    // const toggleTodoItemClickHandler = (id) => {
    //     let currentTodo;
    //     let currentIndex;

    //     for (let i = 0; i < todos.length; i++) {
    //         if (todos[i].id == id) {
    //             currentTodo = todos[i];
    //             currentIndex = i;

    //             break;
    //         }
    //     }

    //     let toggledTodo = {...currentTodo, isDone: !currentTodo.isDone};
    //     setTodos(oldTodos => [
    //         ...oldTodos.slice(0, currentIndex),
    //         toggledTodo,
    //         ...oldTodos.slice(currentIndex + 1)
    //     ]);
    // };

    const toggleTodoItemClickHandler = (id) => {
        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find(x => x.id === id);
            let toggledTodo = {...selectedTodo, isDone: !selectedTodo.isDone};
            let restTodos = oldTodos.filter(x => x.id !== id);

            return [...restTodos, toggledTodo];
        });
    };

    return(
        <>
            <label htmlFor="todo-name">Add todo</label>
            <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo" />
            <ul>
                {todos.map(todo => 
                    <TodoItem 
                        key={todo.id}
                        todo={todo} 
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                    />
                )}
            </ul>
        </>
    );
};