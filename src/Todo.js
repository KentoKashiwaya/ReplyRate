import React, { Component } from 'react';
import './css/todo.css';

class Todo extends Component {

  render() {
    const className = 'undone';
    const link = this.props.done ? '元に戻す' : '完了!';
    return (
      <li className={className}>
        <span>{this.props.id}</span>
        <span>:{this.props.title}</span>
        {/* <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props) }}>{link}</a> */}
        <p>{this.props.desc}</p>
        <span>送信数:{this.props.send}</span>
        <span>返信数:{this.props.reply}</span>
        <p>返信率:{this.props.rate}%</p>
      </li>
    );
  }
}

export default Todo;