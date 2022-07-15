import React from "react";

export const ControlButtons = (props) => {

    const StartButton = (
        <div onClick={props.startHandler}>
            Start
        </div>
    );

    const ActiveButtons = (
        <div>
            <div onClick={props.pauseResumeHandler}>
                {props.isPaused ? ">" : "||"}
            </div>
            <div onClick={props.deleteHandler}>
                --
            </div>

        </div>
    );

    return (
        <div>
            <div>{props.active ? ActiveButtons : StartButton}</div>
            {/*<div>{props.active && ActiveButtons}</div>*/}
        </div>
    );
}