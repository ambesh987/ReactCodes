import React from 'react'

export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {
   const handleEdit= (id) =>{
    const selectedTask = tasklist.find(todo=>todo.id===id);
    setTask(selectedTask);
   }
   const handleDelete= (id) =>{
    const updatedTasklist = tasklist.filter(todo=>todo.id!==id);
    setTasklist(updatedTasklist)
   }
  return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{tasklist.length}</span>
            </div>
            <button className='clearAll' onClick={()=>setTasklist([])}>Clear All</button>
        </div>
        <ul>
            {tasklist.map((task)=>(
            <li key={task.id}>
                <p>
                    <span>{task.name}</span>
                    <span>{task.time}</span>
                </p>
                <i className='bi bi-pencil-square' onClick={()=>handleEdit(task.id)}></i>
                <i className='bi bi-trash' onClick={()=>handleDelete(task.id)}></i>
            </li>
            ))}
            
        </ul>
        
    </section>
  )
}

