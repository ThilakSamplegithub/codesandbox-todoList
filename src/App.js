import "./styles.css";
import { useState } from "react";
import Todo from "./components/Todo";
export default function App() {
  //   function TodoItem({text,id,status,toggle}){
  //     return(
  //       <>
  //  <div key={id}  id={id}><input className="checkBox" type='checkbox' /> {text} {status?'completed':'notYet'}
  //       <button onClick={()=>toggle(id)} >toggle</button>
  //         </div>
  //       </>
  //     )
  //   }

  return (
    <div className="App">
      <Todo />
    </div>
  );
}
