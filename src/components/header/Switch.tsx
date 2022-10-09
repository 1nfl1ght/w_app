import React from 'react'
import './Switch.scss';

type Props = {}

export const Switch = (props: Props) => {
  return (
    <label className='switch'>
        <input type="checkbox" name="" id="" />
        <span className="slider"></span>
    </label>
  )
}