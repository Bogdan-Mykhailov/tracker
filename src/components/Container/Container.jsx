import React from 'react';
import s from './Container.module.css'

export const Container = () => {
    return (
        <div className={s.container}>
           <div className={s.title}>
               <h1>Tracker</h1>
           </div>
        </div>
    );
};