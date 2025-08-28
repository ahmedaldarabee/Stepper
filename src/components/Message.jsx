import React from 'react'

const Message = ({messages,step}) => {
    return (
        <h2 className="text-2xl text-gray-600 text-center capitalize">{messages[step]}</h2>
    )
}

export default Message