import React, {useState, useEffect} from 'react';

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({todoAdd, todoEdit, todoUpdate, setTodoEdit}) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const {title, description} = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)

    useEffect(() =>{

        //Si todoEdit contiene null, no se ejecuta 
        //Si todoEdit contiene null, devuelve valores iniciales
        if(todoEdit){
            setFormValues(todoEdit);
        }

        else{
            setFormValues(initialFormValues);
        }

    }, [todoEdit])

    const handleInputChange = (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }

        setFormValues(changedFormValues);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Con trim() elimino los espacios en blanco
        if(title.trim() === ''){
            setError('Debes escribir el título')
            return;
        }

        if(description.trim() === ''){
            setError('Debes escribir la descripción')
            return;
        }

        //Agregar/actualizar tarea
        if(todoEdit){
            todoUpdate(formValues);
            setSuccessMessage('Tarea actualizada')
        }

        else{
            todoAdd(formValues);
            setSuccessMessage('Tarea agregada')

            //Agrego initialFormValues para que al agregar tarea 
            //los valores de los input vuelvan a los iniciales (vacíos).
            setFormValues(initialFormValues);
        }

        

        //Indicar en milisegundos cuanto tarde en desaparecer
        //el mensaje 
        setTimeout(() =>{
            setSuccessMessage(null);
        }, 3000)

        setError(null);
    }
    
    return (
        <div>
            {/* Al hacer click en editar, la cabecera pasa a ser "Editar
            tarea" */}
            <h2 className='text-center display-5'>{todoEdit ? 'Editar tarea' : 'Nueva tarea'}</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Titulo"
                className="form-control"
                value={title}
                name="title"
                onChange={handleInputChange}
                />
                   
                <textarea 
                placeholder="Descripción"
                className="form-control mt-2"
                value={description}
                name="description"
                onChange={handleInputChange}
                ></textarea>

                <button
                className="btn btn-primary btn-block mt-2">{todoEdit ? 'Actualizar tarea' : 'Agregar tarea'}</button>

                {/* Únicamente mostrar en el modo edición */}
            {
                todoEdit &&
                <button
                onClick={() => setTodoEdit(null)}
                    className='btn btn-primary btn-warning mt-2'
                >Cancelar edición</button>
            }

            </form>

            {
                /* Los && indican que si no hay valor (es null) no muestra el error */
                error &&
                (
                    /* Mostrar error al no escribir el título */
                    <div className="alert alert-danger mt-2">
                        {error}
                        </div>
                ) 
            }

{
                /* Misma lógica que el error */
                successMessage &&
                (
                    <div className="alert alert-success mt-2">
                        {successMessage}
                        </div>
                ) 
            }

        </div>
    )
}

export default TodoForm;