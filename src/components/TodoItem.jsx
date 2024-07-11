import { Component } from "react";
import { Form, ListGroupItem } from "react-bootstrap";

import PropTypes from "prop-types";

export default class TodoItem extends Component {

    handleToggleTodoClick = () => {
        const { toggleTodo, todo } = this.props;

        toggleTodo(todo.id);
    };

    handleRemoveTodoClick = () => {
        const { todo, removeTodo } = this.props;

        removeTodo(todo.id);
    };

    render() {
        const { todo } = this.props;
        const textClass = todo.completed ? "todo-item_completed" : null;

      


        return (<div>
            <ListGroupItem className="todo-item">
                <span className="todo-item_item" onClick={this.handleToggleTodoClick}>
                    <Form.Check readOnly inline checked={todo.completed}></Form.Check>
                    <span className={textClass}>{todo.text}</span>
                </span>


                <span className="todo-item_delete-button" onClick={this.handleRemoveTodoClick}>x</span>
            </ListGroupItem>
        </div>);
    }
}

TodoItem.propTypes = {
    removeTodo: PropTypes.func,
    toggleTodo: PropTypes.func,
    todo: PropTypes.object,
}