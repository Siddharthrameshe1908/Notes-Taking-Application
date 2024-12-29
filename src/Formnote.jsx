import React, { useContext } from 'react'
import { TaskContext } from './TaskProvider'

const Formnote = () => {

    let data = useContext(TaskContext)
    console.log(data);

    let {state, setState, addTask, Task} = data

    let {title, description, category} = state 
    
    let handleChange = (event) => {
        let {name, value} = event.target;
        setState({...state, [name]:value})
    }
    
    let handleSubmit = (event) =>{
        event.preventDefault()
        addTask(title, description, category)
        setState({title: "", description: "", category: ""})
    }

    console.log(Task);
    
  return (
    <>
        <main className="formBlock">
            <form>
                <div className="form-content">
                    <label htmlFor="">Title</label>
                    <input type="text" name='title' value={title} onChange={handleChange}/>
                </div>

                <div className="form-content">
                    <label htmlFor="">Description</label>
                    <textarea name="description" value={description} onChange={handleChange} cols='60' rows="10"></textarea>
                </div>

                <div className="form-content">
                    <label htmlFor="">Category</label>
                    <select name="category" value={category} onChange={handleChange} id="">
                        <option value="">Select</option>
                        <option value="General">General</option>
                        <option value="Technical">Teachnical</option>
                        <option value="Official">Offical</option>
                    </select>
                </div>

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </main>
    </>
  )
}

export default Formnote