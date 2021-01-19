import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Get a Job',
    day: 'by May',
    reminder: true
  }])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id != id))
  }

  return (
    <div className="container">
      <Header title= 'Task Tracker'/>
      {tasks.length > 0  ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <h3 style={{ color: 'Blue'}}>No Tasks</h3>}
    </div>
  );
}


export default App;
