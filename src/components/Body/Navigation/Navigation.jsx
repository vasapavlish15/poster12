import React from 'react';
import s from './Navigation.module.css';
import profile from '../../../icon/Vector.svg';
import chat from '../../../icon/Chat.svg';
import { NavLink } from 'react-router-dom';

export default function Navigation() {

  const link = ({ isActive }) => {
    return {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontWeight: isActive ? "900" : '200',
      fontSize: isActive ? "15px" : '14px',
      lineHeight: "17px",
      color: isActive ? "#1778F2" : "#444D5C",
      backgroundColor: isActive ? "#F1F3F3" : '',
      borderLeft: isActive ? "2px solid #3473C0" : '',
      width: '100%',
      height: '100%',
    };
  };

  return (
    <div className={s.navigation}>
      <div className={s.item}>
        <NavLink to='/' style={link}>
          <img src={profile} alt="" className={s.icon_menu} />
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/chat'} style={link}>
          <img src={chat} alt="" className={s.icon_menu} />
          Chat
        </NavLink>
      </div>
    </div>
  )
}
