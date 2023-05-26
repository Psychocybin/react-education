import React from 'react';

class TodoList extends React.Component {
    render() {
        return(
            <>
                <h2>Tasks</h2>

                <ul>
                    <li>Clean your room</li>
                    <li>Go shoping</li>
                    <li>Learn React</li>
                    <li>Alino</li>
                </ul>
            </>
        );
    }
}

export default TodoList;