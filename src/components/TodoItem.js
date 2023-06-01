//import { useEffect } from 'react';
import styles from './TodoItem.module.css';

export default function TodoItem({
    todo,
    onDelete,
    onClick
}) {
    // useEffect(() => {
    //     console.log(`${todo.id} - mounted`);

    //     return() => {
    //         console.log(`${todo.id} - unmounted`);
    //     }
    // }, [todo.id]);

    return (
        <li onClick={() => onClick(todo.id)} className={styles.todoItem}>
            {todo.text}
            <button onClick={() => onDelete(todo.id)}>x</button>
        </li>
    );
};