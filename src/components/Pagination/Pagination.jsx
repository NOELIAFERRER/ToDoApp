import React from "react";
//estilos
import styles from './Pagination.module.css'

const Pagination = ({ tasks, tasksPerPage, paging, page }) => {
  //preparo los valores para los botones de navegación
  const pages = [];
  for (let i = 1; i <= Math.ceil(tasks / tasksPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <nav className={styles.pages}>
        <ul>
          {pages?.map((el, key) => (
            <button className={page -1 === key? styles.btnActive : styles.btnPasive} key={key} onClick={() => paging(el)}>
              {el}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
