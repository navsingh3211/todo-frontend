// import './App.css'
import { useState ,useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { ToDos } from "./components/ToDos";

function App() {
  const [todos, setTodos] = useState([]);


  //hooks ,life cycle
  useEffect(()=>{
    fetch("http://13.235.247.2:8085/api/v1/get-to-do-listing").then(
      async function (res) {
        const json = await res.json();
        // console.log(json.data);
        setTodos(json.data);
      }
    );
  },[])

  

  return (
    <div>
      <CreateTodo></CreateTodo>
      <ToDos todos={todos}></ToDos>
    </div>
  );
}

export default App;
