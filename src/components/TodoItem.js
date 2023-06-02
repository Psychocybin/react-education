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
        <li onClick={() => onClick(todo.id)} className={styles.todoItemDone}>
            {todo.text}
            <button onClick={(e) => onDelete(e, todo.id)}>x</button>
        </li>
    );
};