import React from "react";
import Task from "../components/Task/Task";
import { useSelector } from "react-redux";
import styles from './Home.module.css'

const Home = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log("tasks", tasks);
  const callTasks = tasks.filter((el) => el.action === "llamada");
  const singleTasks = tasks.filter((el) => el.action === "single");
  const otherTasks = tasks.filter((el) => el.action !== "llamada" && el.action!=='single');
 
  return (
    <div className={styles.container}> 
      <div>
        <h3>Tareas que impliquen un llamado a terceros</h3>
        {!callTasks.length ? (
          <p>No tienes llamados para realizar</p>
        ) : (
          callTasks.map((el, key) => (
            <div key={key}>
              <Task task={el} />
            </div>
          ))
        )}
      </div>
      <div>
        <h3>Tareas sencillas</h3>
        {!singleTasks.length ? (
          <p>No tienes tareas sencillas para realizar</p>
        ) : (
          singleTasks.map((el, key) => (
            <div key={key}>
              <Task task={el} />
            </div>
          ))
        )}
      </div>
      <div>
        <h3>Otras tareas</h3>
        {!otherTasks.length ? (
          <p>Relaja, no hay tareas complejas!!</p>
        ) : (
          otherTasks.map((el, key) => (
            <div key={key}>
              <Task task={el} />
            </div>
          ))
        )}
      </div>
      
    </div>
  );
};

export default Home;
