import styles from "./List.module.scss"
import Item from './Item'
import { Itask } from "../../interfaces/Itasks"

interface Props {
  task: Itask[],
  selectTask: (selectedTask: Itask) => void 
}

function List({ task, selectTask }: Props) {
  return (
    <aside className={styles.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {task.map((item) => (
                <Item 
                  selectTask={selectTask}
                  key={item.id}
                    {...item}
                />
            ))}
        </ul>
    </aside>
  )
}

export default List