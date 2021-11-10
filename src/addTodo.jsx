import { useState } from "react";

const AddTodo = ({onAddTodo}) => {
    const [ title, setTitle ] = useState('');
    return ( 
       <div className="block">
           <input className=""
            type="text"  
           placeholder="Add todo"
           value={title} 
           onChange={e => setTitle(e.target.value)}
           />
           <button className="" 
           onClick={()=>{
               setTitle('');
               onAddTodo(title);
           }}>
               Add
           </button> 
       </div>
     );
}
 
export default AddTodo;