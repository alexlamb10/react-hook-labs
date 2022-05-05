import React from 'react'
import Todo from './Todo'

function List(props) {
    const {todo} = props
  return (
    <div>
        {todo.map((task) => {
            return <Todo task={task}/>
        })}
    </div>
  )
}

export default List