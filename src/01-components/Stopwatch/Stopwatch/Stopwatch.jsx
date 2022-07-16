import React, {useState} from 'react';
import {Timer} from "../Timer/Timer.jsx";
import {ControlButtons} from "../ControlBtn/ControlButtons.jsx";
import s from './Stopwatch.module.css'

export const Stopwatch = (props) => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const startHandler = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const pauseResumeHandler = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className={s.wrapper}>
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                startHandler={startHandler}
                pauseResumeHandler={pauseResumeHandler}
                removeTracker={props.removeTracker}
            />
        </div>
    );
};