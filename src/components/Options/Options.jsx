import React, { useState } from "react";
//redux
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/actions";
//material ui
import { Dialog, DialogContent } from "@mui/material";
//styles
import styles from "./Options.module.css";


const Options = ({ task, pri, sta }) => {
  const { priority, status } = task;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
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
                <label htmlFor="Media">Media</label>
                <input
                  type="radio"
                  id="Baja"
                  value="Baja"
                  name="priority"
                  onClick={handleClick}
                  checked={priority !== "null" && priority === "Baja"}
                />
                <label htmlFor="Baja">Baja</label>
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
