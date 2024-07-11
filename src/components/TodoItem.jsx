import { Component } from "react";
import { Form, ListGroupItem } from "react-bootstrap";

import PropTypes from "prop-types";

export default class TodoItem extends Component {

    handleToggleTodoClick = () => {
        const {toggleTodo, todo} = this.props;

        toggleTodo(todo.id);
    };

    render() {
        const { todo } = this.props;
        const textClass = todo.checked ? "todo-item_completed" : null;

        /*if (todo.checked == true) {
            textClass = "todo-item_completed";
        } else {
            textClass = null
        }*/

       

        return (<div>
            <ListGroupItem className="todo-item">
                <span className="todo-item_item" onClick={this.handleToggleTodoClick}>
                    <Form.Check readOnly inline checked={TodoItem.completed}></Form.Check>
                    <span className={textClass}>{todo.text}</span>
                </span>


                <span className="todo-item_delete-button">x</span>
            </ListGroupItem>
        </div>);
    }
}

TodoItem.propTypes = {
    toggleTodo: PropTypes.func,
    todo: PropTypes.object,
}