import React, {useState} from 'react';
import s from './Container.module.css'
import {Input} from "../Input/Input.jsx";
import {Stopwatch} from "../Stopwatch/Stopwatch.jsx";

export const Container = () => {
    const [trackerName, setTrackerName] = useState([])

    const addTitle = (text) => {
        setTrackerName([{title: text, timer: ''}, ...trackerName])
    }

    return (
        <div className={s.container}>
            <div className={s.title}>
                <h1>tracker</h1>
            </div>
            <Input addTitle={addTitle}/>
            {trackerName.map((t, index) => {
                return (
                    <div key={t + ' ' + index}>{t.title} {<Stopwatch/>}</div>
                )
            })}
        </div>
    );
};