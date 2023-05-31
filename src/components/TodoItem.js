import { useEffect } from 'react';

export default function TodoItem({
    todo,
    onDelete
}) {
    useEffect(() => {
        console.log(`${todo.id} - mounted`);

        return() => {
            console.log(`${todo.id} - unmounted`);
        }
    }, [todo.id]);

    return <li>{todo.text} <button onClick={() => onDelete(todo.id)}>x</button></li>
};