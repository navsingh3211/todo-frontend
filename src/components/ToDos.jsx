/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
{
  /* <h1>Go to gym</h1>
    <h2>you need to go to gym</h2>
    <button>Mark as complete</button> */
}

export function ToDos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button
              onClick={()=>{
                fetch("http://13.235.247.2:8085/api/v1/complate-to-do",{
                  method:"PUT",
                  body:JSON.stringify(
                    {
                      id:todo._id
                    }
                  ),
                  headers:{
                    'content-type':'application/json'
                  }
                }).then(async function(res){
                  const json = await res.json();
                  alert("Task completed!")
                })
              }}
            >
              {todo.isCompleted == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
