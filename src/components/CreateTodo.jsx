import { useState } from "react";

export function CreateTodo() {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function(e){
          const value = e.target.value;
          setTitle(value)
          // console.log(value,'title');
        }}
      />{" "}
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function(e){
          const value = e.target.value;
          setDescription(value)
          // console.log(value,'desc--');
        }}
      />{" "}
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={()=>{
          fetch("http://13.235.247.2:8085/api/v1/to-do",{
            method:"POST",
            body:JSON.stringify(
              {
                title:title,
                description:description
              }
            ),
            headers:{
              'content-type':'application/json'
            }
          }).then(async function(res){
            const json = await res.json();
            alert("To do added")
          })
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
