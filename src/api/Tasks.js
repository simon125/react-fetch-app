import fetchLogger from './utielsApi'

const taskResourcePath = 'https://tasks.isa.valuepoint.pl/tasks'
const myId = '5af01d3e6f78ba537f03af5c'

export const changeDescriptionOfTask = taskId => {
    // funkcja dostępna w obiektu window
    // do przypisywania taska do innych osób

    const description = prompt('zmień opis taska')

    const url = `${taskResourcePath}/${taskId}/change-description`
    // wskazanie zasobu poprzez url

    const fetchConfig = {
        method: 'PATCH',
        body: JSON.stringify({
            description: description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }

          if (description) {
             return fetch(url, fetchConfig).then(fetchLogger)
           }
         else{
            return Promise.resolve('')
         }
         

    // if (description) {
    //     return fetch(url, fetchConfig)
    //         .then(fetchLogger)
    // }
}

export const getAllTasks = () => {
    return fetch(`${taskResourcePath}`)
        .then(fetchLogger)
    // .then(tasks => console.log("all tasks ", tasks))
}

export const addTaskToUser = (creator, title) => {
    const url = `${taskResourcePath}/add`
    const task = {
        creator: creator,
        title: title
    }
    const fetchconfig = {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, fetchconfig)
        .then(fetchLogger)
    // .then(data => console.log('getMyUser ', data))
}
export const deleteTask = (id) => {
    const urlek = `${taskResourcePath}/${id}`
    const toDelete = {
        method: "DELETE"
    }
    return fetch(urlek, toDelete)
        .then(fetchLogger)
        .then(data => console.log('it was deleted'))
}
export const getAllMyTasks = (creator) => {
    return fetch(`${taskResourcePath}/search/creator/${creator}`)
        .then(fetchLogger)
    // .then(mojeTasks => {
    //     console.log("moje taski ", mojeTasks)

    // })
}
export const getAllMyTasksByAssignee = (assignee) => {
    return fetch(`${taskResourcePath}/search/assignee/${assignee}`)
        .then(fetchLogger)
    // .then(assignedToMeTasks => {
    //     console.log("przypisane do mnie taski ", assignedToMeTasks)

    // })
}

export const assignTaskToUser = (task_id) => {
    const assignee = prompt('do kogo ma być przypisany task?')
    const url = `${taskResourcePath}/${task_id}/assing-to/${assignee}`
    if (assignee.length) {
        return fetch(url)
            .then(fetchLogger)
        // .then((data) => {
        //     console.log('assignTo', data)
        //     alert('assigned to ' + assignee)
        // })
    }
}
