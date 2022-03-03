import { memo } from "react"
function UseMemoCallBack({onIncrease}){
    console.log('re-render')
    return(
        <>
          <h2>hello</h2>
        <button onClick={onIncrease}>Click me</button>
   
        </>
    )
      
}
export default memo(UseMemoCallBack)