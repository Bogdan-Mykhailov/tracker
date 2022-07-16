import React, {useState} from 'react';
import s from './Input.module.css'
import play from '../../assets/play.svg'

export const Input = (props) => {

    const [text, setText] = useState('')
    const setTrackNameHandler = () => {
        props.addTitle(text)
        setText('')
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
        <div className={s.wrapper}>
            <input className={s.input} placeholder='Enter tracker name' onKeyDown={onKeyDownHandler} type="text" value={text} onChange={inputHandler}/>
            <img onClick={setTrackNameHandler} className={s.playIcon} src={play} alt="play"/>
        </div>
    );
};