import React from 'react'
import style from "./Clock.module.scss"

interface Props {
  time: number | undefined
}

function Clock({ time = 0 }: Props) {
  const minutos = Math.floor(time / 60)
  const segundos = time % 60
  const [minutosDezena, minutosUnidade] = String(minutos)
  .padStart(2, "0")
  const [segundosDezena, segundosUnidade] = String(segundos)
  .padStart(2, "0")
  return (
    <>
  <span className={style.relogioNumero}>{minutosDezena}</span>
  <span className={style.relogioNumero}>{minutosUnidade}</span>
  <span className={style.relogioDivisao}>:</span>
  <span className={style.relogioNumero}>{segundosDezena}</span>
  <span className={style.relogioNumero}>{segundosUnidade}</span>
    </>
  )
}

export default Clock