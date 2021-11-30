import React, { Component } from 'react';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  // eslint-disable-next-line
  onChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    e.preventDefault();
    if (title.trim()) {
      this.props.addTodoProps(title); // eslint-disable-line
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item'); // eslint-disable-line
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
