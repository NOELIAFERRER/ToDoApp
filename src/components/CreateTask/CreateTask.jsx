import React, { useState } from 'react'
//material ui
import {
    Dialog,
    DialogTitle,
    DialogContent,
  } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getTasks } from '../../redux/actions';


const CreateTask = () => {
    const [open, setOpen] = useState(true);
    const [input, setInput] = useState({
        title: "",
        priority: "",
        status: "",       
        description: "",
      });
      const dispatch = useDispatch();

      const handleSubmit = (e) => {
        e.preventDefault()  
           dispatch(getTasks(input))
           setOpen(false)
      };

      const handleClick = (e) => {
        setOpen(true)
      }


    const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

      const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <div>
        <button onClick={handleClick}>+</button>
        {}
         <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
  <DialogContent>
          <DialogTitle sx={{ width: '100%', fontSize: 18 }}>
           Especificar la tarea para agregar
          </DialogTitle>
      
          <form onSubmit={handleSubmit}>
               <p>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          name="title"
          value={input.title}
        />
      </p>

      <p>Prioridad</p>

<div>
        <label htmlFor="Alta">Alta</label>
        <input
          type="radio"
          id="Alta"
          value="Alta"
          name="priority"
          onClick={(e) => handleChange(e)}
        />
        <label for="Media">Media</label>
        <input
          type="radio"
          id="Media"
          value="Media"
          name="priority"
          onClick={(e) => handleChange(e)}
        />
        <label for="Baja">Baja</label>
        <input
          type="radio"
          id="Baja"
          value="Baja"
          name="priority"
          onClick={(e) => handleChange(e)}
        />
      </div>
      <p>Estado: </p>
      <div>
        <input
          type="radio"
          id="nueva"
          value="Nueva"
          name="status"
          onClick={(e) => handleChange(e)}
        />
        <label htmlFor="nueva">Nueva</label>
        <input
          type="radio"
          id="en proceso"
          value="En proceso"
          name="status"
          onClick={(e) => handleChange(e)}
        />
        <label htmlFor="en proceso">En proceso</label>
        <input
          type="radio"
          id="finalizada"
          value="Finalizada"
          name="status"
          onClick={(e) => handleChange(e)}
        />
        <label htmlFor="finalizada">Finalizada</label>
      </div>

      <div>
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

      <p>
        <label htmlFor="description">Descripción</label>
        <textarea
          name="description"
          id="des"
          cols="30"
          rows="10"
          onChange={(e) => handleChange(e)}
          value={input.description}
        ></textarea>
      </p>

      <button type="submit">Agregar</button>
      </form>

          </DialogContent>
          {/* <DialogActions>
          <Button
            onClick={handleSubmit}
            color="primary"
            sx={{ width: '100%', fontSize: 12 }}
          >
            Continuar con la compra
          </Button> */}
          {/* {success && <FlashMsg></FlashMsg>}   */}
          {/* {checkout && <Checkout order={order}></Checkout>}       */}
        {/* </DialogActions> */}

      </Dialog>
        
        
        
        </div>
  )
}

export default CreateTask