import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList2() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Party for birthday'},
        {id: 2, text: 'Menu for parents'},
        {id: 3, text: 'Menu for friends'},
        {id: 4, text: 'The bill'},
    ]);
 
    const onTodoInputBlur = (e) => {
        let todo = {
            id: todos.length + 1,
            text: e.target.value,
        };

        setTodos(oldTodos => [
            ...oldTodos,
            todo
        ]);
    };

    // useEffect(() => {
    //     console.log('Mounted!');
    // }, []);

    console.log('update');

    const deleteTodoItemClickHandler = (id) => {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id != id));
    };

    return(
        <>
            <label htmlFor="todo-name">Add todo</label>
            <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo" />
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} onDelete={deleteTodoItemClickHandler} />)}
            </ul>
        </>
    );
};