import React, {useState ,useEffect} from 'react'
const UseEffect=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("useEffect Mounted");        
    })
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>inc</button>
        </div>
    )
}
export default UseEffect





































