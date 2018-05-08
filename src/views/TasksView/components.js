import React from 'react'
import * as logic from './logic'

const TasksAssingedToMe = ({data,refresh}) => {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>title</th>
            <th>status</th>
            <th>creator</th>
            <th>assignee</th>
            <th>description</th>
            <th>hours</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>

        {data.map((task, key) => {
            return ( <tr key={key}>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.creator}</td>
                <td>{task.assignee}</td>
                <td>{task.description}</td>
                <td>{JSON.stringify(task.hours)}</td>
                <td><button
                onClick={logic.assignTasksTo}
                >Assign task to</button></td>
                <td><button
                onClick={()=>{
                  logic.changeDescription(task._id,refresh)
                }}
                >change description</button></td>
                <td><button
                onClick={logic.changeStatus}
                >change status</button></td>
                <td><button
                onClick={logic.logHoursToTask}
                >log hours</button></td>
              </tr>)
          })}
        </tbody>
      </table>
    )
  }

  export {TasksAssingedToMe}
  

  