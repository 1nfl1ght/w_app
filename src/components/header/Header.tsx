import React, { useState } from 'react';
import { Switch } from './Switch';
import s from './Header.module.scss';
import "../../styles/index.scss";

type Props = {}

export const Header = (props: Props) => {

  return (
    <div className="container">
      <header className={s.header}>
        <div className={s.left_container}>
          <div id={s.wrapper1}>
            <div className={s['menu-icon']}></div>
            <div className={s['notifications-icon']}></div>
            <div className={s['current-place']}><b>city</b>, Country</div>
          </div>
          <div id={s.wrapper2}>
            <div className={s.search}>
              <input type="search" name="search-city" id="search" placeholder='Search'/>
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