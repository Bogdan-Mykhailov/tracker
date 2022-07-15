import React, {useState} from 'react';
import s from './Input.module.css'

export const Input = (props) => {

    const [text, setText] = useState('')
    const setTrackNameHandler = () => {
        props.addTitle(text)
        setText('')
        props.startHandler()
    }

    const inputHandler = (e) => {
        setText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            setTrackNameHandler()
        }
    }

    return (
        <div className={s.input}>
            <input onKeyDown={onKeyDownHandler} type="text" value={text} onChange={inputHandler}/>
            <button onClick={setTrackNameHandler}>+</button>
        </div>
    );
};