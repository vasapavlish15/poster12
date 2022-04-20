import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from './Body/Chat/Chat';
import Header from './Body/Header/Header';
import Profile from './Body/Profile/Profile';
import Navigation from './Body/Navigation/Navigation';
import s from './Components.module.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className={s.body}>
      <Header />
      <div>
        <Navigation />
        <div className={s.content}>
          <Routes>
            <Route path='/' element={<Profile/>}/>
            <Route path='/chat' element={<Chat/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}
