import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

const App = () => {
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Application 190',
        day: 'Nov 13',
        reminder: true,
    },
    {
        id: 2,
        text: 'VISA',
        day: 'September 11',
        reminder: true,
    },
    {
        id: 3,
        text: 'Vechile Registration',
        day: 'ASAP',
        reminder: true,
    },
])

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


  return (
    <div className='container'>
      <Header />
      {
//        <Tasks tasks={tasks} onDelete = {deleteTask}/>
        tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask}/>) : ('No Task to Show')
      }  
    </div>
  );
}

export default App;
