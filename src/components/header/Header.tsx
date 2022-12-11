import React, { Dispatch, FormEvent, useState } from 'react';
import { Switch } from './Switch';
import s from './Header.module.scss';
import "../../styles/index.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../store/actions/alertActions';
import { getWeather, setLoading } from '../../store/actions/weatherActions'; 
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../store';

type Props = {}

export type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<RootState, null, AnyAction>

export const Header = (props: Props) => {

  const dispatch = useDispatch<AppDispatch>();

  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const weatherData = useSelector((state: RootState) => state.weather.data);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === '') {
        return dispatch(setAlert('City is required!'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return (
    <div className="container">
      <header className={s.header}>
        <div className={s.left_container}>
          <div id={s.wrapper1}>
            <div className={s['menu-icon']}></div>
            <div className={s['notifications-icon']}></div>
            <div className={s['current-place']}><b>{weatherData?.name}</b>, {weatherData?.sys.country}</div>
          </div>
          <div id={s.wrapper2}>
            <div className={s.search}>
              <form onSubmit={submitHandler}>
                <input type="search" value={city} onChange={changeHandler} name="search-city" id="search" placeholder='Search'/>
              </form>
            </div>
          </div>
        </div>
        <div id={s.wrapper3}>
          <Switch></Switch>
          <div className={s['profile']}></div>
        </div>
      </header>
    </div>
  )
}