import React from 'react'
import './Info_switch.scss'

type Props = {}

export const Info_switch = (props: Props) => {
  return (
    <label className='switch'>
      <div className="tabs-text">
        <span>Forecast</span>
        <span>Air quality</span>
      </div>
      <input type="checkbox" />
      <span className="slider">
        <div className="tabs-text">
          <span>Forecast</span>
          <span>Air quality</span>
        </div>
      </span>
    </label>
  )
}