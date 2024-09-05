import React, { useState } from 'react';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        if (inputValue.trim()){
            setTasks([...tasks, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h1> Todo List </h1>
            <div>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Add a new task' />
                <button onClick={addTask}> Add Task </button>
            </div>
            
            <ul style={{ listStyleType: 'none', padding: 0}}>
                {tasks.map((task, index) => (
                    <li key={index} style={{
                        textDecoration: task.completed ? 'line-through' : 'none', margin: '10px 0',
                    }}
                    >
                        {task.text}
                        <button onClick={() => toggleTaskCompletion(index)} style={{ marginLeft: '10px'}}> {task.completed ? 'Undo' : 'complete'}</button>
                        <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px'}}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo 