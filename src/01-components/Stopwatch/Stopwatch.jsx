import React, {useState} from 'react';
import {Timer} from "./Timer.jsx";
import {ControlButtons} from "./ControlButtons.jsx";

export const Stopwatch = () => {

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

    const deleteHandler = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div>
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                startHandler={startHandler}
                pauseResumeHandler={pauseResumeHandler}
                deleteHandler={deleteHandler}
            />
        </div>
    );
};