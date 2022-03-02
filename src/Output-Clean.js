import { useState } from "react";
import { CleanUp } from "./Cleant-up";


export function OutPutClean(){
    const [show,setShow] = useState(false)
    return(
        <div>
            <div style={{padding: 50}}>
                <button onClick={()=> setShow(!show)}>Toggle</button>
                {show && <CleanUp/>}
            </div>
        </div>
    )

   
}