import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {BsPencil} from 'react-icons/bs'

const Todo = ({todo, deleteTodo, completeTodo, openEdit}) => {
  return (
    <div className={`Todo${todo.isCompleted ? ' completed' : ''}`} onClick={() => completeTodo(todo.id)}>
      <h3>{todo.text}</h3>
      <div className='todoIcons' onClick={(e) => e.stopPropagation()}>
        <BsPencil className='todoIcon edit' onClick={() => openEdit(todo.id)}/>
        <AiOutlineDelete className='todoIcon delete' onClick={() => deleteTodo(todo.id)}/>
      </div>
    </div>
  )
}

export default Todo