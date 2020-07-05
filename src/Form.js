import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './css/form.css';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          {/* <input name="title" type="text" placeholder="サービス名" /><br/> */}
          <select name="title">
            <option value="Tinder">Tinder</option>
            <option value="Pairs">Pairs</option>
            <option value="タップル">タップル</option>
            <option value="Omiai">Omiai</option>
            <option value="with">with</option>
            <option value="PCMAX">PCMAX</option>
            <option value="ひまトーク">ひまトーク</option>
          </select><br/>

          <textarea name="desc" placeholder="送信メッセージ" /><br />
          <input name="send" type="number" placeholder="送信数" /><br />
          <input name="reply" type="number" placeholder="返信数" /><br />
          <button type="submit">項目を作成</button>
        </form>
        <button onClick={this.props.handleDelete}>全項目を削除</button>
      </div>
    )
  }
}
export default Form;