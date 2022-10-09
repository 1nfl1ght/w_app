import React from 'react';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import { Switch } from './Switch';

import s from './Header.module.scss';

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s['menu-icon']}></div>
      <div className={s['notifications-icon']}></div>
      <div className={s['current-place']}><b>Alushta</b>, Russia</div>
      <div className={s['search']}>
        <input type="search" name="search-city" id="search" placeholder='Search'/>
      </div>
      {/* <div className={s['themes']}></div> */}
      <Switch></Switch>
      <div className={s['profile']}></div>
    </header>
  )
}