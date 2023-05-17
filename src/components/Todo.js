import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {BsPencil} from 'react-icons/bs'

const Todo = ({todo, deleteTodo, completeTodo, openEdit}) => {
  return (
    <div>
      <h3 className={todo.isCompleted ? 'active' : ''} onClick={() => completeTodo(todo.id)}>{todo.text}</h3>
      <BsPencil onClick={() => openEdit(todo.id)}/>
      <AiOutlineDelete onClick={() => deleteTodo(todo.id)}/>
    </div>
  )
}

export default Todo