import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import Done from './components/Done'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      todos: [],
      done: [],
    }

    this.updateText = this.updateText.bind(this)
    this.deleteDone = this.deleteDone.bind(this)
    this.moveTodo = this.moveTodo.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  render() {
    let todos = this.state.todos.map((todo, key) => {
      return <Todo todo={todo} key={key} id={key} moveTodo={this.moveTodo}/>
    })
    let done = this.state.done.map((done, key) => {
      return <Done done={done} key={key} id={key} deleteDone={this.deleteDone}/>
    })
    return (
      <div className="App">
        <form>          
          <label>Enter To-Do Item: <input type="text" onChange={this.updateText}/></label>
          <button type="submit" onClick={this.addTodo}>+ Add Todo</button> 
        </form>
        <div className="flexbox">
          <div>
            <h1>In-Progress</h1>
            <ul className="flex-col">
              {todos}
            </ul>
          </div>
          <div>
            <h1>Completed</h1>
            <ul className="flex-col">
              {done}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  updateText(e) {
    e.preventDefault()
    this.setState({inputText: e.target.value})
  }

  addTodo(e) {
    e.preventDefault()
    let todos = this.state.todos
    todos.push(this.state.inputText)
    this.setState({todos: todos})
  }

  moveTodo(e) {
    e.preventDefault()
    let todos = this.state.todos
    let done = this.state.done
    done.push(todos[e.target.id])
    todos.splice(e.target.id, 1)
    this.setState({todos: todos})
    this.setState({done: done})
  }

  deleteDone(e) {
    e.preventDefault()
    let done = this.state.done
    done.splice(e.target.id, 1)
    this.setState({done: done})
  }
}

export default App;
