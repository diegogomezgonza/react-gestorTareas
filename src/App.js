import React, { useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';


const initialTodos = [
    {
    id: 1,
    title: 'Actualizar software',
    description: 'Buscar actualizaciones Windows 10',
    completed: true
    },

    
    {
    id: 2,
    title: 'Descargar drivers',
    description: 'Descargar última versión',
    completed: true
    }
];

const localTodos = localStorage.getItem('todos');
const App = () => {

    // Contiene las tareas

    const [todos, setTodos] = useState(initialTodos);

    // Contiene tarea que se actualiza (cuando no sea null, será un objeto)
    const [todoEdit, setTodoEdit] = useState(null)

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const todoDelete = (todoId) =>{

        //Si todoEdit contiene null, no compara datos
        //Si todoEdit no es nulo, hace la comparación
        if(todoEdit && todoId === todoEdit.id) {
            setTodoEdit(null);
        }

        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
    }

    const todoToogleCompleted = (todoId) => {

        // Primer método para map

        /* const changedTodos = todos.map(todo =>{

            const todoEdit = {
                ...todo,
                completed: !todo.completed
            }

            if(todo.id === todoId){
                return todoEdit
            }

            else {
                return todo
            }
        }) */

        // Segundo método para map

        /* const changedTodos = todos.map(todo =>(
            todo.id === todoId 
            ? {...todo, completed: !todo.completed}
            :todo
        )); */


        // Tercer método para map
        const changedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(changedTodos);
    }

    const todoAdd = (todo) =>{

        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }

        const changedTodos = [
            newTodo,
            ...todos
        ]

        setTodos(changedTodos);
    }

    const todoUpdate = (todoEdit) => {

        const changedTodos = todos.map(todo => (
            todo.id === todoEdit.id
            ? todoEdit
            : todo
        ))
        setTodos(changedTodos);
    }

    return (
    <div className="container mt-4">
        <div className="row">
            <div className='col-8'>
                <TodoList
                todos={todos}
                todoDelete={todoDelete}
                todoToogleCompleted={todoToogleCompleted}
                setTodoEdit={setTodoEdit}
                />
            </div>

            <div className='col-4'>
                <TodoForm
                    todoEdit={todoEdit}
                    todoAdd={todoAdd}
                    todoUpdate={todoUpdate}
                    setTodoEdit={setTodoEdit}
                />
            </div>
        </div>
    </div>
    )
}

export default App;