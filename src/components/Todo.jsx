import React, { useEffect, useRef, useState } from "react";
import { FaListCheck, FaPlus, FaRegCircle } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);
  const data = useRef();
  const addTodos = () => {
    const inputText = data.current.value.trim();
    if(inputText === ""){
        return null
    }

    const newTodo = {
        id:todos.length + 1,
        text:inputText,
        isComplate : false,
    }

    setTodos((prev)=>[...prev,newTodo])
    data.current.value = "";
  };
  const toggle =(id)=>{
    setTodos((prevTodo)=>{
       return prevTodo.map((todo)=>{
        if(todo.id===id){
            return {...todo,isComplate:!todo.isComplate}
        }return todo
       })
    })
  }
  const removeTodo =(id)=>{
    setTodos((prevTodos)=>{
        return prevTodos.filter((todo)=>todo.id !== id)
    })
  }
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <div className="place-self-center w-[450px] bg-white  p-12 rounded-lg">
      <h1 className="text-3xl font-semibold tracking-wider flex items-center gap-3  py-2">
        <FaListCheck />
        Todo App
      </h1>
      <div className="flex bg-[#E4E0E1]  rounded-full items-center mt-2">
        <input
          ref={data}
          className="flex-1 border-none outline-none p-2 px-3 bg-transparent placeholder:text-slate-400 justify-center "
          type="text"
          placeholder="Yeni todo oluştur..."
        />
        <div onClick={()=>addTodos()} className="bg-[#77CDFF] h-full p-2 w-10 justify-center items-center rounded-r-full">
          <FaPlus className="size-6 text-[#fff] cursor-pointer" />
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center">
        {
             todos.map((todo)=>(
                <TodoItem  key={todo.id} todo={todo} toggle={toggle} removeTodo={removeTodo}/>
             ))
        }
      </div>
    </div>
  );
};

export default Todo;
