import React, { useEffect, useState } from "react";
//components
import Filters from "../components/Filters/Filters";
import Task from "../components/Task/Task";
import Pagination from "../components/Pagination/Pagination";
//styles
import styles from './Home.module.css'
//redux
import { useSelector } from "react-redux";

const Home = () => {
  const tasks = useSelector((state) => state.tasks);  
 
  //preparo para la paginación
  const [page, setPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(2);
  const indexLastTask = page * tasksPerPage;
  const indexFirstTask = indexLastTask - tasksPerPage;
  //fragmento el total de tareas a mostrar por página
  const currentTasks = tasks?.slice(indexFirstTask, indexLastTask);

  //asigno el total de tareas según acción
  const callTasks = currentTasks.filter((el) => el.action === "llamada");
  const singleTasks = currentTasks.filter((el) => el.action === "single");
  const otherTasks = currentTasks.filter((el) => el.action !== "llamada" && el.action!=='single');
 
  const paging = (number) => {
    setPage(number);
  };  

  return (
    <div className={styles.container}> 
    <Filters setPage={setPage}/>
    <div className={styles.tasks}>
      <div>
        <h4>Tareas que impliquen un llamado a terceros</h4>
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
        <h4>Tareas sencillas</h4>
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
        <h4>Otras tareas</h4>
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
      <Pagination tasks={tasks.length} tasksPerPage={tasksPerPage} paging={paging} page={page}/>
    </div>
  );
};

export default Home;
