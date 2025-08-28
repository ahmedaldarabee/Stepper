import React, { useState } from "react"
import Message from "./Message"
import ProgressBar from "./ProgressBar";

const MultiStep = () => {

    const messages = [ "learn react" , "apply for jobs" , "invest your income" ]
    const [steps,setSteps] = useState(0);
    
    const handleNextStep = () => {
        if(steps <= 2 ) setSteps((step) => step +1 )
    }
    
    const handlePrevStep = () => {
        if(steps >= 1) setSteps((step) => step - 1);
    }

    return (
        <div className="container overflow-x-hidden mx-auto border shadow-md w-full max-w-[550px] px-2 py-4 rounded-md cursor-pointer relative space-y-4">

            {/* line-bar */}
            <div className="progressContainer flex justify-between items-center relative">
                
                <ProgressBar totalSteps={messages.length} steps={steps}/>
                {
                    messages.map((info, idx) => (
                        <div className={`circle ${idx === steps ? 'active': ''}`}>{idx+1}</div>
                    ))
                }
            </div>

            <div className="content">
                <Message messages={messages} step={steps}/>
            </div>
            
            <div className="btns">
                <button className={`btn ${steps == 0 ? 'disabled' : ''}`} onClick={handlePrevStep}>prev</button>
                <button className={`btn ${steps == 2 ? 'disabled' : ''}`} onClick={handleNextStep}>next</button>
            </div>
        </div>
    )
}

export default MultiStep