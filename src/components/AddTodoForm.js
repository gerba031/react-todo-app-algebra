import { Component } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

export default class AddTodoForm extends Component {

    state = {
        newItem: "",
    };

    handleChange = (evt) => {
        const noviZadatak = evt.target.value;
        console.log("setState -> " + noviZadatak)
        this.setState({ noviZadatak });
    }

    handleAddTodoClick = (event) => {
        event.preventDefault();

        //  console.log("test");

        const {newItem} = this.state;
        const {addTodo} = this.props;

        addTodo(newItem);

        this.setState({ newItem: ""})
    }

    render() {
        return (
            <Form>
                <InputGroup>
                    <FormControl onChange={this.handleChange} />
                    <Button type="submit" onClick={this.handleAddTodoClick}>Dodaj</Button>
                </InputGroup>
            </Form>
        );
    }
}


AddTodoForm.propTypes = {
    addTodo: PropTypes.func,
};