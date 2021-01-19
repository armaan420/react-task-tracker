import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Get a Job',
    day: 'by May',
    reminder: true
  }])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
   }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
    
  }
 
  return (
    <div className="container">
      <Header title='ਮਾਨ Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={ showAddTask }/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3 style={{ color: 'Blue'}}>No Tasks</h3>}
      {showAddTask && <AddTask onAdd={ addTask }/>}
    </div>
  );
}


export default App;
