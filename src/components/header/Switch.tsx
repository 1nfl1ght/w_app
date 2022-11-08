import React from 'react'
import './Switch.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

type Props = {}

export const Switch = (props: Props) => {
  return (
    <label className='switch'>
      <div className="themes-icons">
        <GlobalSvgSelector id={"sun_switch"}></GlobalSvgSelector>
        <GlobalSvgSelector id={"moon_switch"}></GlobalSvgSelector>
      </div>
      <input type="checkbox" />
      <span className="slider">
        <div className="themes-icons">
          <GlobalSvgSelector id={"sun_switch"}></GlobalSvgSelector>
          <GlobalSvgSelector id={"moon_switch"}></GlobalSvgSelector>
        </div>
      </span>
    </label>
  )
}