import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Day } from './Days'
import s from './Days.module.scss'

type Props = {
  day: Day
}

const moon_cloud = require('../../assets/images/42.png');

export const Card = ({ day }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day_info}>{day.temp}</div>
      <img className={s.img} src={day.icon_id}/>
    </div>
  )
}