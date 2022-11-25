import React from 'react'
// import TodoItem from '../My Components/TodoItem';
import TodoItem from './TodoItem';


export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {/* we will use for loop to display all todos */}
      {/* but for now only pass single todo */}

      {props.todos.length === 0 ? "No todos to display" :
      props.todos.map((todo) => {
        return(  
        <TodoItem todo = {todo}  key={todo.sno} onDelete = {props.onDelete}/>
      )})}
    
    </div>
  )
}
