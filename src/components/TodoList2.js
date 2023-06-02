import { useState } from "react";
import uniqid from 'uniqid';
import TodoItem from "./TodoItem";

export default function TodoList2() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Party for birthday', isDone: false},
        {id: 2, text: 'Menu for parents', isDone: false},
        {id: 3, text: 'Menu for friends', isDone: false},
        {id: 4, text: 'The bill', isDone: false},
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

    const deleteTodoItemClickHandler = (e, id) => {
        e.stopPropagation();
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
            let selectedIndex = oldTodos.findIndex(x => x.id === id);

            return [
                ...oldTodos.slice(0, selectedIndex),
                toggledTodo,
                ...oldTodos.slice(selectedIndex + 1),
            ];
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