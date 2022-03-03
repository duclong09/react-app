import { useState } from "react";
import { Count } from "./Count";


export function Toggle(){
    const [show,setShow] = useState(false)
    return(
        <div>
            <div style={{padding: 50}}>
                <button onClick={()=> setShow(!show)}>Toggle</button>
                {show && <Count/>}
            </div>
        </div>
    )
}