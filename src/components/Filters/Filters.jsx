import React from "react";
//redux
import { useDispatch } from "react-redux";
import { filterTasks } from "../../redux/actions";
//styles
import styles from './Filters.module.css'

const Filters = ({setPage}) => {

    const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterTasks(e.target.value));
    setPage(1)
  };
  
  return (
    <div className={styles.container}>
      <p style={{fontSize: '120%'}}>Filtrar</p>
      <div>
      <label htmlFor="Priority">Prioridad</label>
      <select name="Pioridad" id="pri" onChange={(e) => handleChange(e)}>
        <option name="All" value="All">
          All
        </option>
        <option name="Alta" value="Alta">
          Alta
        </option>
        <option name="Media" value="Media">
          Media
        </option>
        <option name="Baja" value="Baja">
          Baja
        </option>
      </select>
      </div>
      <div>
      <label htmlFor="Estado">Estado</label>
      <select name="Estado" id="est" onChange={(e) => handleChange(e)}>
        <option name="All" value="All">
          All
        </option>
        <option name="Nueva" value="Nueva">
          Nueva
        </option>
        <option name="En proceso" value="En proceso">
          En proceso
        </option>
        <option name="Finalizada" value="Finalizada">
          Finalizada
        </option>
      </select>
      </div>
    </div>
  );
};

export default Filters;
