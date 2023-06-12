import React, { useState } from 'react'
import Button from '../Button'
import styles from "./Form.module.scss"
import { Itask } from '../../interfaces/Itasks'
import { v4 as uuidv4  } from "uuid"

export default function Form ({ setTask }: {setTask: React.Dispatch<React.SetStateAction<Itask[]>>}) {

  const [clock, setClock] = useState({
    task: "",
    time: ""
  })

  function saveTask(event: React.FormEvent) {
    event.preventDefault()

    const newTask = {
      task: clock.task,
      time: clock.time,
      complete: false,
      selected: false,
      id: uuidv4()
    }
    
    setTask(oldTask => [...oldTask, newTask])

    setClock({
      task: "",
      time: ""
    })
  }

  return (
    <form className={styles.novaTarefa} onSubmit={saveTask}>
        <div className={styles.inputContainer}>
            <label htmlFor='tarefa'>Adicione um novo estudo</label>
            <input 
                name='tarefa'
                type="text" 
                value={clock.task}
                onChange={event => setClock({...clock , task: event.target.value})}
                id='tarefa'
                placeholder='O que você quer estudar'
                required
            />
        </div>

        <div className={styles.inputContainer}>
            <label htmlFor='tempo'>Tempo</label>
            <input
                id='tempo' 
                type="time"
                step="1"
                name='tempo'
                value={clock.time}
                onChange={event => setClock({ ...clock, time: event.target.value })}
                min="00:00:00"
                max="01:00:00"
                required
                />
        </div>
        <Button>Enviar</Button>
    </form>
  )

}