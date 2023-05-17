import React, {useState} from 'react'

const EditFormTodo = ({todo, editTodo}) => {
  const [value, setValue] = useState(todo.text)

  const handleSubmit = (e) => {
    e.preventDefault()
    editTodo(value, todo.id)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button>Update Todo</button>
    </form>
  )
}

export default EditFormTodo