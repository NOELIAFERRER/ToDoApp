import React, { useEffect, useState } from "react";
import Task from "../components/Task/Task";
import { useDispatch, useSelector } from "react-redux";
import styles from './Home.module.css'
import Pagination from "../components/Pagination/Pagination";
import { setTasks } from "../redux/actions";

const Home = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log("tasks", tasks);
  
  //preparo para la paginación
  const [page, setPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(2);
  const indexLastTask = page * tasksPerPage;
  const indexFirstTask = indexLastTask - tasksPerPage;
  //fragmento el total de tareas a mostrar por página
  const currentTasks = tasks.slice(indexFirstTask, indexLastTask);
  console.log('indexFirstTask', indexFirstTask)
  console.log('indexLastTask', indexLastTask)
  console.log('currentTask', currentTasks)
  //asigno el total de tareas según acción
  const callTasks = currentTasks.filter((el) => el.action === "llamada");
  const singleTasks = currentTasks.filter((el) => el.action === "single");
  const otherTasks = currentTasks.filter((el) => el.action !== "llamada" && el.action!=='single');
 

  const paging = (number) => {
    setPage(number);
  };  

  useEffect(() => {
    dispatch(setTasks())
  }, [dispatch])

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
      <Pagination tasks={tasks.length} tasksPerPage={tasksPerPage} paging={paging} page={page}/>
    </div>
  );
};

export default Home;
