import React from 'react';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

const todos = [
    {
        task: 'make React tutorial',
        isComplete: true
    },
    {
        task: 'eat dinner',
        isComplete: true
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos
        }
    }
    render() {
        return(
            <div>
                <h1>Hello Todos App</h1>
                <CreateTodo createTask={this.createTask.bind(this)}/>
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }

    createTask (task) {
        this.state.todos.push({
            task,
            isComplete: false
        });

        this.setState({
            todos: this.state.todos
        });
    }
}