import React, {useState} from 'react'

const EditFormTodo = ({todo, editTodo}) => {
  const [value, setValue] = useState(todo.text)

  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(value, todo.id)
    setValue('')
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}  >
      <input className="todo-input" type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button className='todo-btn'>Update Todo</button>
    </form>
  )
}

export default EditFormTodo