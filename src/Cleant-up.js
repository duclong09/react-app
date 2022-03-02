import { useEffect, useState } from "react";


export const CleanUp = () =>{
    const [avatar, setAvatar] = useState()

    useEffect(()=>{
        //cleanup
        return() =>  avatar && URL.revokeObjectURL(avatar.preview)
    },[avatar])

    const handlePreviewAvatar = (e)=>{
        const file = e.target.files[0]
        //console.log(URL.createObjectURL(file))
        if(!file) return
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    
  
    return(

        <div>
          <input 
            type="file"
            onChange={handlePreviewAvatar}
          />
          {avatar && (
              <img src={avatar.preview} alt="" width="80%"/>
          )}
        </div>
    )
}