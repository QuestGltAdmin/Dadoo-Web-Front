import React, { useEffect, useState } from 'react'

const Countup = ({ targetNumber, animationTime }) => {
    const [count, setCount] = useState()


    useEffect(() => {
        const intervalId = setInterval(() => {
            //Increase count by 1 in each interval until it reaches he target number
            setCount((prevCount) => {
                if (prevCount < targetNumber) { return prevCount + 1 } else {
                    //clear the interval when the count reaches the target number
                    clearInterval(intervalId);
                    return prevCount
                }
            })
        }, [animationTime])

        return () => clearInterval(intervalId)
        return prevCount;
    }, [targetNumber])

    return (
        <>
            {count}
        </>
    )
}

export default Countup
