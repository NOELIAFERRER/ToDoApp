import { DELETE_TASK, FILTER_TASKS, GET_TASKS, UPDATE_TASK } from "./actions";

const initialState = {
  tasks: [],
  allTasks: [],
  localStorage: [], 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      
      const taskList = [...state.tasks, action.payload]      
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        allTasks: [...state.tasks, action.payload],

        //preparo para trabajar con la memoria
        localStorage: window.localStorage.setItem(taskList, JSON.stringify(taskList))        
        // localStorage: window.localStorage.setItem([...state.tasks, action.payload], JSON.stringify([...state.tasks, action.payload]) )
      
      };
    case UPDATE_TASK:
      const tasksCopy = [...state.allTasks];      
      const taskToUpdateIndex = tasksCopy.findIndex(el => `${el.title}` === `${action.payload.title}`)
      if (tasksCopy[taskToUpdateIndex] !== null) {
        tasksCopy[taskToUpdateIndex] = action.payload;
      }
      console.log("tasksCopy,", tasksCopy);
      return {
        ...state,
        tasks: tasksCopy,
        localStorage: window.localStorage.setItem([...state.tasks, action.payload], JSON.stringify([...state.tasks, action.payload]) )

      };
      case FILTER_TASKS:
        const tasksCopy1 = [...state.allTasks];
        const filteredTasks = 
        action.payload === 'All'
        ? tasksCopy1
        : tasksCopy1.filter((el) => el.priority === action.payload || el.status === action.payload)
        return{
          ...state,
          tasks: filteredTasks
        }
        case DELETE_TASK:
          const tasksCopy2 = [...state.tasks];
          const taskRemaining = tasksCopy2.filter((el) => el.title !== action.payload.title)
          return{
            ...state,
            tasks: taskRemaining,
            allTasks: taskRemaining
          }  
  
    default:
      return { ...state };
  }
};

export default rootReducer;
