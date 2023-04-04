// import './App.css';

import Home from "./Views/Home";
import CreateTask from "./components/CreateTask/CreateTask";
import Filters from "./components/Filters/Filters";
import styles from './App.module.css'

function App() {
  return (
    
    <div className={styles.container}>
      <Filters />
      <Home />
      <CreateTask />
    </div>

  );
}

export default App;
