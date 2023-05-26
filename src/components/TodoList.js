import TodoListItem from './TodoListItem';
import TodoListItemChildren from './TodoListItemChildren';
import React from 'react';

class TodoList extends React.Component {
    render() {
        return(
            <>
                <h2>Tasks</h2>

                <ul>
                    <TodoListItem color="blue" text="Clean your room"/>
                    <TodoListItem color="red" text="Go fishing"/>
                    <TodoListItem color="yellow" text="LearnReact"/>
                    <TodoListItem color="purple" text="Alino"/>
                    <TodoListItemChildren>Children text</TodoListItemChildren>
                </ul>
            </>
        );
    }
}

export default TodoList;