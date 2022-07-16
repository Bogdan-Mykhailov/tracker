import React, {useState} from 'react';
import s from './Container.module.css'
import {Input} from "../Input/Input.jsx";
import {Stopwatch} from "../Stopwatch/Stopwatch/Stopwatch.jsx";
import moment from 'moment'
import {v4} from "uuid";

export const Container = () => {
    const [trackerName, setTrackerName] = useState([])

    const addTitle = (text) => {
        setTrackerName([{title: text ? text : moment().format('LL'), id: v4()}, ...trackerName])
    }

    const removeTracker = (id) => {
        let filteredTrackers = trackerName.filter(t => t.id === id)
        setTrackerName(filteredTrackers)
        console.log('must to be deleted')
    }

    return (
        <div className={s.container}>
            <div className={s.title}>
                <h1>tracker</h1>
            </div>
            <Input addTitle={addTitle}/>
            {trackerName.map(t => {
                return (
                    <div className={s.row} key={t.id}>{t.title}<Stopwatch removeTracker={removeTracker}/></div>
                )
            })}
        </div>
    );
};