import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default function TodoList({ todos, toggleTodo }) {
    return (
        <div>
            {todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} toggleTodo={toggleTodo}></TodoItem>
            })}

        </div>
    );
}

TodoList.propTypes = {
    toggleTodo: PropTypes.func,
    todo: PropTypes.object,
}