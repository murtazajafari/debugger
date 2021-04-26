import React from 'react'

export default function Channels(props) {
    return (
        <div>
            <ul>
                <li onClick={(e) => props.channelHandler(e)} id="google">Google</li>
                <li onClick={(e) => props.channelHandler(e)} id="facebook">Facebook</li>
            </ul>
        </div>
    )
}
