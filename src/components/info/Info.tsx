import React from 'react'
import { Info_switch } from './Info_switch'
import { Today } from '../Today/Today'
import  "../../styles/index.scss"
import './info.scss'
import { Days } from '../Days/Days'

type Props = {}

export const Info = (props: Props) => {
  return (
    <div className="container">
      <div className='info'>
        <div className="left_container">
          <div className="into__top_block">
            <div className="text_block">
              <p>Today</p>
              <p>Tomorrow</p>
              <p style={{opacity: '1' , fontWeight: '700'}}>Next 5 days</p>
            </div>
            <div className="switch_block">
              <Info_switch></Info_switch>
            </div>
          </div>
          <Today></Today>
          <Days/>
        </div>
      </div>
    </div>
  )
}