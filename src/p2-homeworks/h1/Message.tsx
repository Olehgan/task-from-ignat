import React from 'react'
import s from './Messages.module.css'

export type MessagesPropsType = {
    avatar: string
    name: string
    message: string
    time: string

}


function Message(props: MessagesPropsType) {
    return (
        <div className={s.messages}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>

            <div className={s.angle}></div>

                <div className={s.content}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>


                </div>



        </div>
    )
}

export default Message
