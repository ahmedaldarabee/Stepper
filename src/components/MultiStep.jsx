import React from "react"

const MultiStep = () => {
    return (
        <div className="container overflow-x-hidden mx-auto border shadow-md w-full max-w-[550px] px-2 py-4 rounded-md cursor-pointer relative space-y-4">

            {/* line-bar */}
            <div className="progressContainer flex justify-between items-center relative">
                
                {/* progress line */}
                <div className="progress"></div>
                
                {/* steps  */}
                <div className="circle active">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
            </div>

            <div className="content">
                <h2 className="text-2xl text-gray-600 text-center capitalize">learn react js</h2>
            </div>
            
            <div className="btns">
                <button className="btn disabled">prev</button>
                <button className="btn" >next</button>
            </div>
        </div>
    )
}

export default MultiStep