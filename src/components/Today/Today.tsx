import React from 'react'
import s from './Today.module.scss'

type Props = {}

const moon_cloud = require('../../assets/images/42.png');

export const Today = (props: Props) => {
  return (
    <div className={s.today}>
        <div className={s.top__block}>
          <div className={s.this__day}>Sunday</div>
          <div className={s.this__day}>11:42 PM</div>
        </div>
        <div className="line"></div>
        <div className={s.bottom__block}>
          <img className={s.weatherIcon} src={moon_cloud}/>
          <p className={s.temp}>16</p>
          <p>Real Feel:</p>
          <p>Wind:</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p style={{margin: '0px'}}>Pressure:</p>
            <p style={{margin: '0px'}}>Humidity: </p>
          </div>
        </div>
    </div>
  )
}