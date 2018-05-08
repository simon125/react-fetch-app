import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getAllUsers} from './api/UsersApi'
import {getAllTasks} from './api/Tasks'

import TasksView  from './views/TasksView/index.js'
//JIRA

//
//
//

class App extends Component {
  
  componentDidMount(){
    getAllUsers()
    getAllTasks()
  }
  
  render() {



    return (
      <div >
        <TasksView/>
      </div>
    );
  }
}

export default App;
