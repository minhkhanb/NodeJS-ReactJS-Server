import _ from 'lodash';
import React from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {
    renderItems () {
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} />);
    }

    render() {
        console.log(JSON.stringify(this.props, null, 2));
        return(
            <table>
                <TodoListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}