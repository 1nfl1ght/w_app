import React from 'react'
import { Info_switch } from './Info_switch'
import { Today } from '../Today/Today'

type Props = {}

export const Info = (props: Props) => {
  return (
    <div className='info'>
        <Info_switch></Info_switch>
        <Today></Today>
    </div>
  )
}