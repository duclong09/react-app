import { useState, useEffect } from "react"
import { ChatApp } from "./Fake-chat-app"





export function FakeChatApp(){
    const [show,setShow] = useState(false)

    
    return(
        <div>
            <div style={{padding: 50}}>
                <button onClick={()=> setShow(!show)}>Show Toggle</button>
                {show && <ChatApp/>}
            </div>
        </div>
    )
}