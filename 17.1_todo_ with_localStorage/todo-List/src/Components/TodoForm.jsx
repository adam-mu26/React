import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")

    const handelSubmit = e => {
        e.preventDefault()

        // console.log(value);
    }
  return (
    <form className='TodoForm'  onSubmit={handelSubmit}>
         <input type='text' className='todo-input' placeholder='What is the task today?' onChange={(e)=> setValue(e.target.value)}></input>
         <button type='submit' className='todo-btn'>Add Task</button>


    </form>
  )
}
