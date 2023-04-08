import Home from "./Views/Home";
import CreateTask from "./components/CreateTask/CreateTask";
import styles from './App.module.css'

function App() {
  return (
    
    <div className={styles.container}>
      <Home />
      <CreateTask />
    </div>
  );
}

export default App;
