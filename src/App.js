// import './App.css';

import Home from "./Views/Home";
import CreateTask from "./components/CreateTask/CreateTask";
import Filters from "./components/Filters/Filters";

function App() {
  return (
    <div className="App"> 
    <Filters /> 
    <Home />
        {/* <Input /> */}
     <CreateTask />
    </div>
  );
}

export default App;
