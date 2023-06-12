import React from 'react'
import styles from "../List.module.scss"
import { Itask } from '../../../interfaces/Itasks'

interface Props extends Itask {
  selectTask: (selectedTask: Itask) => void 
}

function Item({ task, time, selected, complete, id, selectTask }: Props) {
  console.log("Item atual:", task, time, selected, complete, id)
    
  return (
    <>
        <li className={`${styles.item} ${selected ? styles.itemSelecionado : ""}
        ${complete ? styles.itemCompletado : ""}`}
        onClick={() => !complete && selectTask({
          complete,
          id,
          selected,
          task,
          time
        })}>
            <h3>{task}</h3>
            <span>{time}</span>
            {complete && <span className={styles.concluido}></span>}
        </li>
    </>
  )
}

export default Item