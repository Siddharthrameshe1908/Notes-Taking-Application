import  { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export let TaskContext = createContext()
const TaskProvider = (props) => {

    let [state,setState] = useState({
        title: "",
        description : "",
        category : ""
    })

    let getLocalItems = () =>{
      let lists = localStorage.getItem("lists")
      if(lists){
        return JSON.parse(lists)
      }
      else{
        return []
      }
    }

    let [Task,setTask] = useState(getLocalItems) 

    const addTask = (title,description,category) =>{
        setTask([...Task,{title,description,category,id:uuidv4()}])
    }

    useEffect(()=>{
      localStorage.setItem("lists", JSON.stringify(Task))
    },[Task])

    let [selective, setSelective] = useState({
      selectedCategory : 'all'
    })

    let handleCategory = (event) =>{
      let {name, value} = event.target 
      setSelective({[name]:value})
    }

    let handleDelete = (x) =>{
      let filteredItem = Task.filter((item) => item.id != x)
      setTask(filteredItem)
    }

    let handleUpdate = (y) =>{
      let remainingItems = Task.filter((item) => item.id != y)
      let editNote = Task.find((item) => item.id == y)
      setTask(remainingItems)
      setState(editNote)
    }

  return (
    <TaskContext.Provider value={{state,setState,addTask,Task,selective,handleCategory, handleDelete, handleUpdate}}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskProvider