import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'
import EditFormTodo from './EditFormTodo'
import RunListButton from './RunListButton'

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        const newTodo = {
            id: uuidv4(),
            text: text,
            isCompleted: false,
            isEditing: false
        }
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const completeTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? 
            ({...todo, isCompleted: !todo.isCompleted}) : (todo)))
    }

    const editTodo = (text, id) => {
        setTodos(todos.map(todo => todo.id === id ?
            ({...todo, text: text, isEditing: false}) : (todo)))
    }

    const openEdit = (id) => {
        setTodos(todos.map(todo => todo.id === id ? ({...todo, isEditing: true}) : todo))
    }

    const deleteCompleted = () => {
        setTodos(todos.filter(todo => !todo.isCompleted))
    }

    return (
        <div className="TodoWrapper">
            <h1>Todo app</h1>

            <div className='runListBtns'>
                <RunListButton onClick={deleteCompleted}>Delete Completed</RunListButton>
                <RunListButton onClick={() => setTodos([])}>Reset List</RunListButton>
            </div>

            <TodoForm addTodo={addTodo} />
            
            {
                todos.length ? 
                
                (todos.map(todo => todo.isEditing ? 
                    (<EditFormTodo 
                        key={todo.id} 
                        todo={todo} 
                        editTodo={editTodo}/>)  
                    :
                    (<Todo 
                        key={todo.id} 
                        todo={todo} 
                        deleteTodo={deleteTodo} 
                        completeTodo={completeTodo} 
                        openEdit={openEdit} />))) 
                : 
                (<h4>No todos</h4>)
            }

        </div>
    )
}

export default TodoWrapper