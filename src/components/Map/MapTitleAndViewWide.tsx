import React from 'react'
import s from './MapTitleAndViewWide.module.scss'

type Props = {}

export const MapTitleAndViewWide = (props: Props) => {
  return (
    <div className={s.map_title_block}>
      <p>Global map</p>
      <button>
        <p>View wide</p>
        <img src={require("../../assets/images/Stars.png")}/>
      </button>
    </div>
  )
}