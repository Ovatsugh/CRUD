import React, { useEffect, useState } from "react";
import bus from '../../../hooks/bus'

function Message() {
    const [visilibity, setVisivility] = useState(false)
    const [type, setType] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {

        bus.addListener('flash', ({ message, type }) => {
            setVisivility(true)
            setMessage(message)
            setType(type)

            setTimeout(() => {
                setVisivility(false)     
            }, 3000)
        })
    }, [])

    return (
        visilibity && (
            <div id="message" className={type} >
                {message}
            </div>
        )
    )
}

export default Message