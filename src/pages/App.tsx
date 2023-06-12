import React, { useState } from 'react';
import Form from "../components/Form/index";
import styles from "./App.module.scss";
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { Itask } from '../interfaces/Itasks';

function App() {

  const [task, setTask] = useState<Itask[]>([])
  const [select, setSelect] = useState<Itask>()

  function selectTask (selectedTask: Itask){
    setSelect(selectedTask)
    setTask(oldTask => oldTask.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if(select){
      setSelect(undefined)
      setTask((oldTask) => oldTask.map((tasks) => {
        if(tasks.id === select.id){
          return {
            ...tasks,
            selected: false,
            complete: true
          }
        }
        return tasks
      }))
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTask={setTask}/>
      <List task={task} selectTask={selectTask}/>
      <Stopwatch finalizarTarefa={finalizarTarefa} select={select}/>
    </div>
  );
}
export default App;