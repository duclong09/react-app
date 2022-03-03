import { useEffect, useLayoutEffect, useState } from "react";



export const Count = ()=>{
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
      // 
      if(count > 3) setCount(0)
    }, [count]);

    const handleRun = ()=>{
        setCount(count + 1)
    }
    return(

        <div>
            <h3>{count}</h3>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}