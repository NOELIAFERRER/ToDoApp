import React, { useState } from "react";
import styles from "./Task.module.css";
import { useDispatch } from "react-redux";

import { deleteTask, updateTask } from "../../redux/actions";
import Options from "../Options/Options";

const Task = ({ task }) => {
  const { title, priority, status, description } = task;
  const dispatch = useDispatch();

  //transformo el título en camelCase:
  const titleToCamelCase = title[0].toUpperCase().concat(title.slice(1));

  const handleClick = (e) => {
    // setOpen(true)
    // dispatch(handleDialog(true))
    // console.log("task", task);
    // task[e.target.name] = e.target.value;
    // dispatch(updateTask(task));
  };

  const handleOnClick = () => {
    console.log("task:", task);
    dispatch(deleteTask(task));
  };

  return (
    <div className={styles.container}>
      <span>{titleToCamelCase}</span>

      <p>{description}</p>
      <div className={styles.info}>
        <div>
          {/* <div className={styles.status}> */}

          <span style={{ fontSize: "0.8rem", color: "#757575" }}>
            Prioridad:
          </span>
          <span>{priority}</span>

          <Options task={task} pri={true} sta={false} />
        </div>
        <div>
          {/* <div className={styles.status}> */}
          <span style={{ fontSize: "0.8rem", color: "#757575" }}>Estado:</span>
          <span>{status}</span>
          {/* </div> */}

          <Options task={task} pri={false} sta={true} />
        </div>

        <button className={styles.btn} onClick={handleOnClick}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Task;
