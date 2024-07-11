import { Component } from "react";
import "./App.css";
import VisibilityToolbar from "./components/VisibilityToolbar";
import AddTodoForm from "./components/AddTodoForm";
import { UniqueString, UniqueNumber, UniqueStringId, UniqueNumberId, UniqueOTP, UniqueCharOTP, HEXColor, uuid } from 'unique-string-generator';
import TodoList from "./components/TodoList";



class App extends Component {
  state = {
    visibility: "all",
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  };

  handleVisibilityChange = (visibility) => {
    this.setState({ visibility });
  };

  handleAddTodo = (vrijednost) => {
    const { todos } = this.state;
    const newTodo = {
      id: UniqueString(),
      text: vrijednost,
      completed: false,

    };

    this.setState({ todos: [...todos, newTodo] });


  };
  // todo : remove in componentDidUpdate();
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  handleToggleTodo = (id) => {
    const { todos } = this.state;
    const todo = todos.find((item) => item.id === id);

    todo.completed = !todo.completed;
    this.setState(todos);



  };

  render() {
    const { todos } = this.state;
    return (

      <div className="App">
        <header className="header">Moji zadaci</header>
        <VisibilityToolbar></VisibilityToolbar>

        <div className="todoContainer">
          <AddTodoForm addTodo={this.handleAddTodo}></AddTodoForm>
          <TodoList todos={todos} toggleTodo={this.handleToggleTodo}></TodoList>
        </div>

      </div>
    );
  }
}

export default App;
