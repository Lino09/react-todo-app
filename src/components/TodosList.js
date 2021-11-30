import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todos, handleChangeProps, deleteTodoProps }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.isRequired,
  handleChangeProps: PropTypes.isRequired,
  deleteTodoProps: PropTypes.isRequired,
};

export default TodosList;
