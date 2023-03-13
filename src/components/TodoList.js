import Todo from './Todo';



const TodoList = ({todos, todoDelete, todoToogleCompleted, setTodoEdit}) => {

    
    return (
        <div>
        <h2 className='text-center display-5'>Tareas</h2>

        {/* Si el array está vacío (igual a 0), muestrame el mensaje,
            sino muestrame todos los todos (tareas). */}
        {
            todos.length === 0
            ? (
                <div className="alert alert-primary">
                    No hay tareas 
                </div>
            )
            :(
                todos.map(todo =>(
                    <Todo
                       todo={todo}
                       key={todo.id}
                       todoDelete={todoDelete}
                       todoToogleCompleted={todoToogleCompleted}
                       setTodoEdit={setTodoEdit}
                      />)))
        }
        </div>
    )
}

export default TodoList;