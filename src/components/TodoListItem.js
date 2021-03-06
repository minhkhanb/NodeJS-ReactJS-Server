import React from 'react';

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionSection() {
        if(this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                <td>{this.props.task}</td>
                {this.renderActionSection()}
            </tr>
        );
    }

    onEditClick () {
        this.state.isEditing = true;
        this.setState(this.state);
    }

    onCancelClick () {
        this.state.isEditing = false;
        this.setState(this.state);
    }
}