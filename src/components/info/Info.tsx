import React, { useEffect, useState } from 'react'
import { Info_switch } from './Info_switch'
import { Today } from '../Today/Today'
import  "../../styles/index.scss"
import './info.scss'
import { Days } from '../Days/Days'
import { MapTitleAndViewWide } from '../Map/MapTitleAndViewWide'
import { MapPlacement } from '../Map/MapPlacement'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { useSelector } from 'react-redux'

type Props = {}

export const Info = (props: Props) => {

  const dispatch = useCustomDispatch();

  const {weather} = useCustomSelector(
    (state)=> state.currentWeatherSliceReducer
  )

  useEffect( () => {
    dispatch(fetchCurrentWeather('paris'))
  }, [] )

  console.log(weather.coord);

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
            <Today weather={weather}></Today>
            <Days/>
          </div>
          <MapTitleAndViewWide />
          <MapPlacement lon={weather.coord.lon} lat={weather.coord.lat}/>
        </div>
      </div>
    </div>
  )
}