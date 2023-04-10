import React, { useEffect, useState } from "react";
//material ui
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, setTasks } from "../../redux/actions";
import styles from "./CreateTask.module.css";

const CreateTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const localStorage = useSelector((state) => state.localStorage)
  console.log('localStorage=>', localStorage)

  const allTasks = useSelector((state) => state.allTasks);
  const dispatch = useDispatch();
  
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    title: "",
    priority: "",
    status: "",
    description: "",
    action: "",
  });
  const [error, setError] = useState({});

  const validateInput = (input) => {
    let errorInput = {}
    if(input.title === '') errorInput.title= 'Se debe ingresar una tarea';
   if(input.priority === '') errorInput.priority= 'Se debe seleccionar una prioridad';
   if(input.status === '' ) errorInput.status = 'Si no se selecciona una opción, por defecto será "Nueva"' 
   if(input.action === '' ) input.action = 'otras' 
   return errorInput
  }

  const handleClick = (e) => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })    
    setError(validateInput(input))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(tasks.length !== allTasks.length){    
      dispatch(setTasks());
    }
    dispatch(getTasks(input));
    setOpen(false);
    setInput({
      title: "",
      priority: "",
      status: "",
      description: "",
      action: "",
    });
  };

  // useEffect(() => {
  //   dispatch(setTasks())
  // }, [dispatch, tasks.length])

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>+</button>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogTitle sx={{ width: "100%", fontSize: 18 }}>
            Tarea a agregar
          </DialogTitle>

          <form onSubmit={handleSubmit}>
            <div className={styles.title}>
              <label htmlFor="title">Título</label>
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                name="title"
                value={input.title}
              />   
               {error.title && <p className={styles.error}>{error.title}</p> }         
            </div>
           
            <div className={styles.options}>
              <div className={styles.optionsTitle}>
                <span>Prioridad</span>
                <span style={{ color: "grey" }}>{input.priority}</span>
              </div>
              <div className={styles.optionsGroup}>
                <label htmlFor="Alta">Alta</label>
                <input
                  type="radio"
                  id="Alta"
                  value="Alta"
                  name="priority"
                  onClick={(e) => handleChange(e)}
                />
                <label htmlFor="Media">Media</label>
                <input
                  type="radio"
                  id="Media"
                  value="Media"
                  name="priority"
                  onClick={(e) => handleChange(e)}
                  />
                <label htmlFor="Baja">Baja</label>
                <input
                  type="radio"
                  id="Baja"
                  value="Baja"
                  name="priority"
                  onClick={(e) => handleChange(e)}
                  />
              </div>
                  {error.priority && <p className={styles.error}>{error.priority}</p>}
            </div>
            <div className={styles.options}>
              <div className={styles.optionsTitle}>
                <span>Estado</span>
                <span style={{ color: "grey" }}>{input.status}</span>
              </div>

              <div className={styles.optionsGroup}>
                <label htmlFor="nueva">Nueva</label>
                <input
                  type="radio"
                  id="nueva"
                  value="Nueva"
                  name="status"
                  onClick={(e) => handleChange(e)}
                />
                <label htmlFor="en proceso">En proceso</label>
                <input
                  type="radio"
                  id="en proceso"
                  value="En proceso"
                  name="status"
                  onClick={(e) => handleChange(e)}
                />
                {/* <label htmlFor="finalizada">Finalizada</label>
                <input
                  type="radio"
                  id="finalizada"
                  value="Finalizada"
                  name="status"
                  onClick={(e) => handleChange(e)}
                /> */}
              </div>
              {error.status && <p className={styles.error}>{error.status}</p> }         

            </div>

            <div className={styles.action}>
              <select
                name="action"
                id="action"
                onChange={(e) => handleChange(e)}
                value={input.action}
              >
                <option name="label" value="label">
                  Acción a realizar
                </option>
                <option name="llamada" value="llamada">
                  Llamada a 3eros
                </option>
                <option name="simple" value="simple">
                  Simple
                </option>
                <option name="otras" value="otras">
                  Otras
                </option>
              </select>
            </div>

            <div className={styles.description}>
              <label htmlFor="description">Descripción</label>
              <textarea
                name="description"
                id="des"
                cols="30"
                rows="5"
                onChange={(e) => handleChange(e)}
                value={input.description}
              ></textarea>
            </div>
            <button type="submit" disabled={error.title || error.priority}>Agregar</button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTask;
