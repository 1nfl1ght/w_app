import React, { useEffect, useState } from 'react'
import { Weather, WeatherData } from '../../store/types/types';
import s from './Today.module.scss';
import { icons } from '../../assets/icons';

type Props = {
  data: WeatherData,
}

// const moon_cloud = require('../../assets/images/42.png');

export const Today = ( {data}: Props ) => {

  const [ dayOfTheWeek, setDayOfTheWeek ] = useState('');
  const [ time, setTime ] = useState('');

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const today = new Date();
  
  useEffect( () => {
    setDayOfTheWeek(days[today.getDay()]);
    setTime(`${today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`);
  } );

  return (
    <div className={s.today}>
        <div className={s.top__block}>
          <div className={s.this__day}>{dayOfTheWeek}</div>
          <div className={s.this__day}>{time}</div>
        </div>
        <div className="line"></div>
        <div className={s.bottom__block}>
          <img className={s.weatherIcon} src={icons.moon_cloud}/>
          <p className={s.temp}>{Math.floor(data.main.temp)}°</p>
          <p>Real Feel: {Math.floor(data.main.feels_like)}°</p>
          <p>Wind: {Math.floor(data.wind.speed)} km/h</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p style={{margin: '0px'}}>Pressure: {Math.floor(data.main.pressure)} <b>MB</b></p>
            <p style={{margin: '0px'}}>Humidity: {Math.floor(data.main.humidity)} %</p>
          </div>
        </div>
    </div>
  )
}