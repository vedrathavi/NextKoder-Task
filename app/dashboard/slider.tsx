"use client";

import { useState } from "react";

export default function Slider({title,mini,maxi,steps, handleParentVal} : props) {
    const [val, setVal] = useState(mini);

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) : void => {
        const value = Number(event.target.value);
        setVal(value);
        handleParentVal(value);
    }
    // const handleNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = Number(event.target.value);
    //     setVal(value);
    // };

    return (
        <div className="flex flex-col justify-baseline gap-4">
            <div className="flex flex-row justify-around items-center">
                <h3 className="text-lg font-medium">{title}</h3>
                <input
                    type="number"
                    value={val}
                    onChange={handleChange}/>
            </div>
            <input
                type="range"
                min={mini}
                max={maxi}
                step={steps}
                value={val}
                onChange={handleChange}

            />
        </div>
    )
}