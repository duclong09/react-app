//lưu các giá trị của 1 tham chiếu bên ngoài

import { useRef, useState, useEffect} from "react"






export function UseRef(){
    const [count,setCount] = useState(60)

   
    const timerID = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(()=>{
      prevCount.current = count
    },[count])

    useEffect(()=>{
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
    })
    
    const handleStart = ()=>{
        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000);
        console.log('start', timerID.current);
    }

    const handleStop = ()=>{
        clearInterval(timerID.current)
        console.log('stop', timerID.current)
    }

    console.log(count,prevCount.current)
    return(
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}