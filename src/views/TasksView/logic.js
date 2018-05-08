import {changeDescriptionOfTask} from '../../api/Tasks'

export const assignTasksTo = () => {
     alert('assignTasksTo') 
    }
export const logHoursToTask = () => {
     alert('logHoursToTask')
     }
export const changeStatus = () => {
     alert('changeStatus') 
    }

    export const changeDescription = (task_id, refresh) => {
        // na jaki opis chce zmienić
      changeDescriptionOfTask(task_id).then(()=>{
          refresh()
      })
    }