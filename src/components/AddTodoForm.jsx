import { Component } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";


export default class AddTodoForm extends Component {

    state = {
        newItem: "",
    };

    ref = React.createRef();

    handleChange = (evt) => {
        const newItem = evt.target.value;
        console.log("setState -> " + newItem)
        this.setState({ newItem });
    }

    handleAddTodoClick = (event) => {
        event.preventDefault();

        //  console.log("test");

        const { newItem } = this.state;
        const { addTodo } = this.props;

        addTodo(newItem);

        this.setState({ newItem: "" });

        this.ref.current.focus();
    }

    render() {
        const { newItem } = this.state;
        return (
            <Form>
                <InputGroup>
                    <FormControl onChange={this.handleChange} value={newItem} placeholder="dodaj zadatak" autoFocus ref={this.ref} />
                    <Button type="submit" onClick={this.handleAddTodoClick}>Dodaj</Button>
                </InputGroup>
            </Form>
        );
    }
}


AddTodoForm.propTypes = {
    addTodo: PropTypes.func,
};