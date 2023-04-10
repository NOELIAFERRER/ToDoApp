import {
  DELETE_TASK,
  FILTER_TASKS,
  GET_TASKS,
  SET_TASKS,
  UPDATE_TASK,
} from "./actions";

const initialState = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(`${localStorage.getItem("tasks")}`)
    : [],
  allTasks: localStorage.getItem("tasks")
  ? JSON.parse(`${localStorage.getItem("tasks")}`)
  : [],
  localStorage: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      if (action.payload.status === "") action.payload.status = "Nueva";
      if (action.payload.action === "") action.payload.action = "otras";
      //preparo para trabajar con localStorage
      localStorage.setItem(
        "tasks",
        JSON.stringify([...state.tasks, action.payload])
      );
      return {
        ...state,
        tasks: JSON.parse(localStorage.getItem("tasks")),
        allTasks: JSON.parse(localStorage.getItem("tasks")),
      };

    case SET_TASKS:
      if (state.allTasks.length > 0) {
        localStorage.setItem("tasks", JSON.stringify([...state.allTasks]));
      }

      return {
        ...state,
        tasks: JSON.parse(localStorage.getItem("tasks")),
        allTasks: JSON.parse(localStorage.getItem("tasks")),
      };
    case UPDATE_TASK:
      const tasksCopy = [...state.allTasks];
      const taskToUpdateIndex = tasksCopy.findIndex(
        (el) => `${el.title}` === `${action.payload.title}`
      );
      if (tasksCopy[taskToUpdateIndex] !== null) {
        tasksCopy[taskToUpdateIndex] = action.payload;
      }
      localStorage.setItem("tasks", JSON.stringify(tasksCopy));

      return {
        ...state,
        tasks: JSON.parse(localStorage.getItem("tasks")),
        allTasks: JSON.parse(localStorage.getItem("tasks")),
      };
    case FILTER_TASKS:
      const tasksCopy1 = [...state.allTasks];
      const filteredTasks =
        action.payload === "All"
          ? tasksCopy1
          : tasksCopy1.filter(
              (el) =>
                el.priority === action.payload || el.status === action.payload
            );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));

      return {
        ...state,
        tasks: JSON.parse(localStorage.getItem("tasks")),
      };
    case DELETE_TASK:
      const tasksCopy2 = [...state.allTasks];
      const taskRemaining = tasksCopy2.filter(
        (el) => el.title !== action.payload.title
      );
      localStorage.setItem("tasks", JSON.stringify(taskRemaining));
      return {
        ...state,
        tasks: JSON.parse(localStorage.getItem("tasks")),
        allTasks: JSON.parse(localStorage.getItem("tasks")),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
