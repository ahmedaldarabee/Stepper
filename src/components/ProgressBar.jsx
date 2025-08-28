import React from 'react'

const ProgressBar = ({ steps, totalSteps }) => {
    const progressLine = ((steps) / (totalSteps-1)) * 100; 

    return (
        <div className='progress w-full'>
            <div 
                className={`progress transition-all duration-900`} 
                style={{
                    width: `${progressLine}%`, 
                    backgroundColor: "#43766c"
                }}>
            </div>
        </div>
    )
}

export default ProgressBar;