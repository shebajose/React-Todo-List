import { useState } from "react";

 const Task = ({todo, onChange, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
      todoContent = (
        <div>
          <input
            value={todo.title}
            onChange={e => {
              onChange({
                ...todo,
                title: e.target.value
              });
               }}/>
               <button className="" 
               onClick={()=>{
                 setIsEditing(false);
               }
               }>
                 Save
                 </button>
               </div>
    );
  }else{
    todoContent =(
      <div>
        {todo.title}
        <button className="" 
        onClick={()=>{
                 setIsEditing(true);
               }
               }>
                 Edit
                 </button>
      </div>
    );
  }
    return (  
        <div className="">
            <label className="">
                <input type="checkbox"
                       checked={todo.done}
                       onChange={e => {
                            onChange ({
                              ...todo,
                              done: e.target.checked
                            });
                          }
                       }
                />
                {todoContent}
                <button className="" 
                onClick={() =>{
                  onDelete(todo.id)
                }}>Delete</button>
            </label>
        </div>
    )
  };
export default Task;
