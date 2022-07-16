import React from "react";
import play from '../../../assets/play.svg'
import pause from '../../../assets/pause.svg'
import minus from '../../../assets/minus.svg'
import s from './ControlButtons.module.css'

export const ControlButtons = (props) => {

    const StartButton = (
        <div className={s.controlButtons}>
            <img onClick={props.startHandler} className={s.icons} src={play} alt="play"/>
            <img onClick={props.removeTracker} className={s.icons} src={minus} alt="minus"/>
        </div>
    );

    const ActiveButtons = (
        <div className={s.controlButtons}>
            <div onClick={props.pauseResumeHandler}>
                {props.isPaused
                    ? <img className={s.icons} src={play} alt="play"/>
                    : <img className={s.icons} src={pause} alt="pause"/>
                }
            </div>
            <img onClick={props.removeTracker} className={s.icons} src={minus} alt="minus"/>
        </div>
    );

    return (
        <div>
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}