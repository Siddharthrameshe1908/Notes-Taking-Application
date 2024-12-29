import  { useContext } from 'react'
import  { TaskContext } from './TaskProvider'
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const Displaynote = () => {

  let data = useContext(TaskContext);
  console.log(data);

  let {Task, selective, handleCategory,handleDelete,handleUpdate} = data 

  console.log(selective);
  let {selectedCategory} = selective
  

  return (
    <>
      <main className="displaySection">
          <div className="selectDisplayNotes" name='selectedCategory' value={selectedCategory} onChange={handleCategory}>
            <label htmlFor="">Select the category:</label>
            <input type="radio" name='selectedCategory' value='all' defaultChecked/> <span>All</span>
            <input type="radio" name='selectedCategory' value="General"/> <span>General</span>
            <input type="radio" name='selectedCategory' value="Technical"/> <span>Technical</span>
            <input type="radio" name='selectedCategory' value="Official"/> <span>Official</span>
          </div>

          <section className="displayBlock">
            <div className="displayNote">
              {
                Task.length == 0 ? <div className='flex gap-5'><span>Add your Notes</span> <div className='loader'></div></div> : Task.map((item) =>{
                  return selectedCategory == 'all' ? (
                    <div className="notes" key={(item.id)}>  
                      <h1>Title : {item.title}</h1>
                      <p><span>Description : </span>{item.description}</p>
                      <p><span>Category : </span>{item.category}</p>
                      <div className="editdeletebutton flex mt-3 gap-20 pl-3">
                        <span onClick={()=>handleUpdate(item.id)} className='editbtn'><CiEdit/></span>
                        <span onClick={()=>handleDelete(item.id)} className='deletebtn'><RiDeleteBinLine/></span>
                      </div>
                    </div>
                  ) : (
                    selectedCategory == item.category && (
                    <div className={selectedCategory} key={(item.id)}>
                      <h1>Title : {item.title}</h1>
                      <p><span>Description : </span>{item.description}</p>
                      <p><span>Category : </span>{item.category}</p>
                      <div className="editdeletebutton flex mt-3 gap-20 pl-3">
                        <span onClick={()=>handleUpdate(item.id)} className='editbtn'><CiEdit/></span>
                        <span onClick={()=>handleDelete(item.id)} className='deletebtn'><RiDeleteBinLine/></span>
                      </div>
                    </div>
                    
                    )
                  )
                })
              }
            </div>
          </section>
      </main>
    </>
  )
}

export default Displaynote


