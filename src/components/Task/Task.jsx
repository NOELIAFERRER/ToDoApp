import React from "react";
import styles from "./Task.module.css";
import { useDispatch } from "react-redux";

import { deleteTask, updateTask } from "../../redux/actions";

const Task = ({ task }) => {
  const { title, priority, status, description } = task;
  const dispatch = useDispatch();

  // const handleChange = (e) => {

  const handleClick = (e) => {
    console.log("task", task);
    task[e.target.name] = e.target.value;
    dispatch(updateTask(task));
  };

  const handleOnClick = () => {
    console.log("task:", task);
    dispatch(deleteTask(task));
  };

  return (
    <div className={styles.container}>
      <div className={styles.task}>
        <span>{title.toUpperCase()}</span>
        <button onClick={handleOnClick}>Eliminar Tarea</button>

        <div className={styles.description}>
          <p> {description}</p>
        </div>
        <div className={styles.info}>          <div>
            {/* <div className={styles.status}> */}
           
            
                <span>Prioridad:</span>
                <span>{priority}</span>
                
                  
              {/* <span>{priority}</span> */}
            {/* </div> */}
            

            <div className={styles.options} id='options'>             
              <input
                type="radio"
                id="Alta"
                value="Alta"
                name="priority"
                onClick={handleClick}
                checked={priority !== "null" && priority === "Alta"}
              />
              <label htmlFor="Alta">Alta</label>
              <input
                type="radio"
                id="Media"
                value="Media"
                name="priority"
                onClick={handleClick}
                checked={priority !== "null" && priority === "Media"}
              />
              <label for="Media">Media</label>
              <input
                type="radio"
                id="Baja"
                value="Baja"
                name="priority"
                onClick={handleClick}
                checked={priority !== "null" && priority === "Baja"}
              />
              <label for="Baja">Baja</label>
            </div>
            <label htmlFor="options">(Modificar)</label>
            {/* <p>Modificar</p> */}
          </div>

          <div>
            {/* <div className={styles.status}> */}
              <span>Estado:</span>
              <span>{status}</span>
            {/* </div> */}

            <div className={styles.options} id='options'>           
              <input
                type="radio"
                id="nueva"
                value="Nueva"
                name="status"
                onClick={handleClick}
                checked={status !== null && status === "Nueva"}
              />
              <label htmlFor="nueva">Nueva</label>
              <input
                type="radio"
                id="en proceso"
                value="En proceso"
                name="status"
                onClick={handleClick}
                checked={status !== null && status === "En proceso"}
              />
              <label htmlFor="en proceso">En proceso</label>
              <input
                type="radio"
                id="finalizada"
                value="Finalizada"
                name="status"
                onClick={handleClick}
                checked={status !== null && status === "Finalizada"}
              />
              <label htmlFor="finalizada">Finalizada</label>
            </div>
            <label htmlFor="options">(Modificar)</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
