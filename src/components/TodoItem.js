import React from 'react';
class TodoItem extends React.Component {
  render() { 
    return (
      <li>
      <input 
      type="checkbox" 
      checked={this.props.todo.completed} 
      onChange={() => this.props.handleChangeProps(this.props.todo.id)} />
      <label>{this.props.todo.title}</label>
    </li>
    );
  }
}
 
export default TodoItem;
