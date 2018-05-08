import React, { Component } from 'react'
import { getAllMyTasks, getAllMyTasksByAssignee } from '../../api/Tasks'
import { TasksAssingedToMe } from './components'

class TasksView extends React.Component {



    state = {
        imBusy: true,
        tasksAssignedToMe: [],
        tasksCreateByMe: []
    }
    refresh() {
        this.setState({
            imBusy: true
          })
      
        Promise.all([
            getAllMyTasksByAssignee('szymon.ol@interia.pl'),
            getAllMyTasks('szymon.ol@interia.pl')
        ]).then((data) => {

            const [tasksAssignedToMe, tasksCreateByMe] = data

            console.log('tasks data dzialaaaa', tasksAssignedToMe, tasksCreateByMe)

            this.setState({
                tasksCreateByMe,
                tasksAssignedToMe,
                imBusy: false
            })
        })
    }


    componentDidMount() {
        // getAllMyTasksByAssignee('szymon.ol@interia.pl')
        // getAllMyTasks('szymon.ol@interia.pl')

        Promise.all([
            getAllMyTasksByAssignee('szymon.ol@interia.pl'),
            getAllMyTasks('szymon.ol@interia.pl')
        ]).then((data) => {

            const [tasksAssignedToMe, tasksCreateByMe] = data

            console.log('tasks data dzialaaaa', tasksAssignedToMe, tasksCreateByMe)

            this.setState({
                tasksCreateByMe,
                tasksAssignedToMe,
                imBusy: false
            })

        })

    }

    render() {

        console.log('this.state', this.state)
        if (this.state.imBusy) {
            return (
                <span>JESTEM ZAJĘTY</span>
            )
        }

        return (
            <div>
                <h2>TasksView</h2>
                <button
                    className='btn btn-block btn-warning'
                    onClick={() => {
                        this.refresh()
                    }}
                >
                    Odśwież
        </button>
                <TasksAssingedToMe {...this.state.tasksAssignedToMe}
                refresh={()=>{this.refresh()}}
                />
            </div>
        )
    }
}


export default TasksView