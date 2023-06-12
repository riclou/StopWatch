import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Clock from './Clock'
import style from "./Stopwatch.module.scss"
import { Itask } from '../../interfaces/Itasks'
import { timeSecond } from '../../common/utils/date'

interface Props {
  select: Itask | undefined,
  finalizarTarefa: () => void
}

function Stopwatch({ select, finalizarTarefa }: Props) {

  const [time, setTime] = useState<number>()

  useEffect(() => {
    if(select?.time){
    setTime(timeSecond(select.time))
    }
  }, [select])

  function regress(contador: number = 0){
    setTimeout(() => {
      if(contador > 0){
        console.log(contador)
        setTime(contador - 1)
        return regress(contador - 1)
      }
      finalizarTarefa()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Esclha um card e inicie o cronometro</p>
        <div className={style.relogioWrapper}>
            <Clock time={time}/>
        </div>
        <Button onClick={() => regress(time)}>Começar</Button>
    </div>
  )
}

export default Stopwatch