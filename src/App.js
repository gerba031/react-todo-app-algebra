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

  handleRemoveTodo = (id) => {
    // console.log("handleRemoveTodo + " +id);
    const { todos } = this.state;
    //console.log("count after: " + newTodos.length);
    const newTodos = todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
  };

  getVisibleTodos = () => {


    const { todos, visibility } = this.state;
    if (visibility === "all") {
      return todos;
    }

    if (visibility === "active") {
      return todos.filter((todo) => !todo.completed);
    }

    if (visibility === "completed") {
      return todos.filter((todo) => todo.completed);
    }
  };

  handleRemoveCompleted = () => {
    const { todos } = this.state;
    /*  let todos = [
        {id = 1. text = prvi zadatal; completed=false}
    
        {d = 2. text = Jdrugi zadatal; completed=false}
    
      ];
      */


    let newTodos = todos.filter((todo) => !todo.completed);

    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;

    const visibleTodos = this.getVisibleTodos();

    const hasCompleted = todos.filter((todo) => todo.completed).length > 0;

    // 2.način preko for petlje
    
    /*let hasCompleted = false;
    let brojac = 0;
    for (let i=0; i<todos.length; i++) {
      if (todos[i].completed ===true) {
        brojac++;
      }
    }
    if (brojac > 0 ){
      hasCompleted = true;
    }*/

    return (

      <div className="App">
        <header className="header">Moji zadaci</header>
        <VisibilityToolbar onVisibilityChange={this.handleVisibilityChange}></VisibilityToolbar>

        <div className="todoContainer">
          <AddTodoForm addTodo={this.handleAddTodo}></AddTodoForm>
          <TodoList
            todos={visibleTodos}
            toggleTodo={this.handleToggleTodo}
            removeTodo={this.handleRemoveTodo}
          ></TodoList>

        </div>

        {hasCompleted &&
          <span className="btn-clear-all" onClick={this.handleRemoveCompleted}>Obriši dovršene</span>}

      </div>
    );
  }
}

export default App;
