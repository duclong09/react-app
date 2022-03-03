import { useCallback, useEffect, useState } from "react";
import UseMemoCallBack from './memo-callback-hooks'
export function UseCallBack(){
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(()=>{
        setCount(prevCount => prevCount + 1)
    },[]) 

    return(
        <div style={{padding: '10px 32px'}}>
            <UseMemoCallBack onIncrease = {handleIncrease}/>
            <h1>{count}</h1>
            
        </div>
    )
}
