import React from 'react'
import { Day } from './Days'
import s from './Days.module.scss'

type Props = {
  day: Day
}

export const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.line}></div>
      <img className={s.img} src={day.icon_id}/>
      <div className={s.day_info}>{day.temp}</div>
    </div>
  )
}