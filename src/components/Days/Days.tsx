import React from 'react'
import { Card } from './Card';
import s from './Days.module.scss'

type Props = {}

export type Day =  {
  day: string;
  icon_id: string;
  temp: string;
}

const moon_cloud = require('../../assets/images/42.png');
const cloud_snow = require('../../assets/images/cloud_snow.png');
const sun_cloud = require('../../assets/images/cloud_sun.png');
const sun = require('../../assets/images/sun.png');
const small_rain_sun = require('../../assets/images/small_rain_sun.png');

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: 'Mon',
      icon_id: small_rain_sun,
      temp: '16',
    },
    {
      day: 'Tue',
      icon_id: sun,
      temp: '20',
    },
    {
      day: 'Wed',
      icon_id: sun_cloud,
      temp: '17',
    },
    {
      day: 'Thu',
      icon_id: cloud_snow,
      temp: '10',
    }
  ];
  
  return (
    <div className={s.days}>{
      days.map((day: Day) => <Card day={day} key={day.day}/>)
    }</div>
  )
}