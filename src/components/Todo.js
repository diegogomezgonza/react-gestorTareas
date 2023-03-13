import React from 'react'

const Todo = ({todo, todoDelete, todoToogleCompleted, setTodoEdit}) => {

    

  return (
    <div className='card mt-2'>
            <div className='card-body '>
                <h2 className='card-title text-right'>
                    {todo.title}
                    
                <p><button
                onClick={() => todoToogleCompleted(todo.id)}
                className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ml-2`}>
                    {todo.completed ? 'Terminado' : 'Terminar'}
                </button></p>
                </h2>
                
                <p className='card-text text-right'>
                    {todo.description}
                </p>
                <hr/>
                <div className='d-flex justify-content-end'>

                <button
                // Hay que enviar la tarea completa
                onClick={() => setTodoEdit(todo)}
                className='btn btn-sm btn-outline-primary mr-2'>
                    Editar
                </button>

                <button
                onClick={() => todoDelete(todo.id)}
                className='btn btn-sm btn-outline-danger'>
                    Eliminar
                </button>

                </div>
            </div>
        </div>
  )
}

export default Todo