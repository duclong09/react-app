import { useState } from "react";

const gifts = ["Macbook 2020", "Ram i9", "RGB Keyboar"]



function Gift(){
    const [gift, setGift] = useState()
    const ranDomGift = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }

    
    return(
        <div style={{padding: 32}}>
            <h1>{gift ?? 'Chưa có phần thưởng'}</h1>
            <button onClick={ranDomGift}>Lấy thưởng</button>
        </div>
    )
}

export default Gift