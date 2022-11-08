import React from 'react'
import { Card } from './Card';
import s from './Days.module.scss'

type Props = {}

export type Day =  {
  day: string;
  icon_id: string;
  temp: string;
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: 'Mon',
      icon_id: '16',
      temp: 'small_rain_sun'
    },
    {
      day: 'Tue',
      icon_id: 'sun',
      temp: '20',
    },
    {
      day: 'Wed',
      icon_id: 'cloud_sun',
      temp: '17',
    },
    {
      day: 'Thu',
      icon_id: 'cloud_rain',
      temp: '10',
    }
  ];
  
  return (
    <div className={s.days}>{
      days.map((day: Day) => <Card day={day}/>)
    }</div>
  )
}