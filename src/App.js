import React, { Component } from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts';
import TodoList from './TodoList'
import Form from './Form'
import './css/App.css';

class App extends Component {
  constructor() {
    super()

    const todos = [];
    for (let i = 1; i < localStorage.length + 1; i++) {
      let prevTodos = JSON.parse(localStorage.getItem(i));
      todos.push(prevTodos);
    }


    this.state = {
      todos: todos,
      countTodo: todos.length + 1,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const send = e.target.send.value;
    const reply = e.target.reply.value;
    const rate = reply / send * 100;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      reply: reply,
      send: send,
      rate: rate,
      done: false,
    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })

    let obj = {
      id: countTodo,
      title: title,
      desc: desc,
      reply: reply,
      send: send,
      rate: rate,
    }

    let opp = JSON.stringify(obj);
    localStorage.setItem(countTodo, opp);

    e.target.title.value = '';
    e.target.desc.value = '';
    e.target.send.value = '';
    e.target.reply.value = '';
  }

  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;
    this.setState({ todos });
  }

  handleDelete() {
    console.log(localStorage.length)
    for (let i = 1; i < localStorage.length + 100; i++) {
      localStorage.removeItem(i)
    }
    window.location.reload();
  }

  render() {
    return (
      <div className="app">
        <div className="left">
      <h1>ReplyRate</h1>
          <ComposedChart　　//グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
            width={600}  //グラフ全体の幅を指定
            height={280}  //グラフ全体の高さを指定
            layout="vertical" //グラフのX軸とY軸を入れ替え
            data={this.state.todos}   //Array型のデータを指定
            margin={{ top: 20, right: 60, bottom: 0, left: 150 }}  //marginを指定
          >
            <XAxis  //X軸に関する設定
              type="number" //データタイプをnumberに変更。デフォルトではcategoryになっている
              domain={[0, 'dataMax']} //軸の表示領域を指定
            />
            <YAxis //Y軸に関する設定
              type="category" //データタイプをcategoryに変更
              dataKey='desc' //Array型のデータの、Y軸に表示したい値のキーを指定
            />
            <Tooltip /> ////hoverさせた時に具体的な値を表示させるように指定
            <CartesianGrid  //グラフのグリッドを指定
              stroke="#fff"  //グリッド線の色を指定
            />
            <Bar
              dataKey='rate'
              barSize={20}
              stroke="rgba(34, 80, 162, 0.2)"
              fillOpacity={1}
              fill="#005D4D"
            />
          </ComposedChart>

          <Form
            handleSubmit={this.handleSubmit.bind(this)}
            handleDelete={this.handleDelete.bind(this)}
          />
        </div>

        <div className="right">
          <TodoList
            todos={this.state.todos}
            setTodoStatus={this.setTodoStatus.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
