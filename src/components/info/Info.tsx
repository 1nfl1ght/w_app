import React, { useEffect, useState } from 'react'
import { Info_switch } from './Info_switch'
import { Today } from '../Today/Today'
import  "../../styles/index.scss"
import './info.scss'
import { Days } from '../Days/Days'
import { MapTitleAndViewWide } from '../Map/MapTitleAndViewWide'
import { MapPlacement } from '../Map/MapPlacement'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../store'

type Props = {}

export const Info = (props: Props) => {

  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

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
          <div className="all_days">
            {weatherData && <Today data={weatherData}></Today>}
            <Days/>
          </div>
          <MapTitleAndViewWide />
          {weatherData && <MapPlacement lon={weatherData?.coord.lon} lat={weatherData?.coord.lat}/>}
        </div>
      </div>
    </div>
  )
}