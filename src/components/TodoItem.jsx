import React from 'react'
import {  FaRegCircle,FaRegCircleCheck} from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem = ({todo,toggle,removeTodo}) => {
  
  return (
    <div onClick={()=>toggle(todo.id)} className='w-full flex items-center gap-2 border-b-2 py-2 mt-2 cursor-pointer px-2 select-none' >
      {!todo.isComplate 
      ?<FaRegCircle className='text-[#006A67]'/>
      :<FaRegCircleCheck className='text-[#006A67]'/>}
        
        <p className={`flex-1 ${todo.isComplate ? "line-through" :""}`}>{todo.text}</p>
        <FaTrashAlt onClick={()=>removeTodo(todo.id)} className='text-[#CC2B52] hover:scale-110 transition-all'/>
    </div>
  )
}

export default TodoItem