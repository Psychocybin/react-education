import TodoListItem from './TodoListItem';
import TodoListItemChildren from './TodoListItemChildren';
import React from 'react';

class TodoList extends React.Component {
    render() {
        return(
            <>
                <h2>Tasks</h2>

                <ul>
                    <TodoListItem text="Clean your room"/>
                    <TodoListItem text="Go fishing"/>
                    <TodoListItem text="LearnReact"/>
                    <TodoListItem text="Alino"/>
                    <TodoListItemChildren>Children text</TodoListItemChildren>
                </ul>
            </>
        );
    }
}

export default TodoList;