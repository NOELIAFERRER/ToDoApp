import React, { useState } from "react";
//styles
import styles from "./Options.module.css";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog, handleDialog, updateTask } from "../../redux/actions";

const Options = ({ task, pri, sta }) => {
  const { title, priority, status, description } = task;
  // const open = useSelector((state) => state.open)
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  console.log("pri:", pri);

  const handleClick = (e) => {
    console.log("task", task);
    task[e.target.name] = e.target.value;
    dispatch(updateTask(task));
  };

  const handleOnClick = () => {
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleOnClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleOnClick}>Modificar</button>
      {open && (
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>

            {pri && (
              <div className={styles.options} id="options">
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
                <button onClick={handleOnClose}>OK</button>
              </div>
            )}
            {sta && (
              <div className={styles.options} id="options">
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
                <button onClick={handleOnClose}>OK</button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Options;
