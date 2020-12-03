import React, { Component } from 'react';
import Navbar from './Navbar'
import Todo from './TodoList/Todo'


class App extends Component {
 
  render() {
    return (
      <div className="app">
       <Navbar/>
       <Todo/>
      </div>
    );
  }
}

export default App;
