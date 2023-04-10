import React from "react";
//components
import Options from "../Options/Options";
//redux
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/actions";
//styles
import styles from "./Task.module.css";

const Task = ({ task }) => {
  const { title, priority, status, description } = task;
  const dispatch = useDispatch();

  //transformo el título en camelCase:
  const titleToCamelCase = title && title[0].toUpperCase().concat(title.slice(1));

   const handleOnClick = () => {
    dispatch(deleteTask(task));
  };

  return (
    <div className={styles.container}>
      <span 
      className={status === 'Finalizada' ? styles.finalizada : priority === 'Alta' ? styles.alta : priority === 'Media' ? styles.media : styles.baja}>{titleToCamelCase}</span>

      <p>{description}</p>
      <div className={styles.info}>
        <div>
          {/* <div className={styles.status}> */}

          <span style={{ fontSize: "0.8rem", color: "#757575" }}>
            Prioridad:
          </span>
          <span>{priority} </span>

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
