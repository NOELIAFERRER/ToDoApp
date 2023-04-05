export const GET_TASKS = 'GET_TASKS';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';
export const DELETE_TASK = 'DELETE_TASK';


export const getTasks = (payload) => {
    return(dispatch)=>{
        dispatch({
            type: GET_TASKS,
            payload,
        })
    }
}

export const updateTask = (payload) => {
    return(dispatch) => {
        dispatch({
            type: UPDATE_TASK,
            payload,
        })
    }
}

export const filterTasks = (payload) => {
    return(dispatch) => {
        dispatch({
            type: FILTER_TASKS,
            payload
        })
    }
}

export const deleteTask = (payload) => {
    return(dispatch) => {
        dispatch({
            type: DELETE_TASK,
            payload
        })
    }
}


