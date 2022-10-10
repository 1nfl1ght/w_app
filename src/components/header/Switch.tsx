import React from 'react'
import './Switch.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

type Props = {}

export const Switch = (props: Props) => {
  return (
    <label className='switch'>
      <div className="themes-icons">
        <GlobalSvgSelector id="sun"></GlobalSvgSelector>
        <GlobalSvgSelector id="moon"></GlobalSvgSelector>
      </div>
      <input type="checkbox" name="" id="" />
      <span className="slider"></span>
    </label>
  )
}