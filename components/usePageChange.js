import { useCallback, useState } from "react";

export const usePageChange = () => {
    const [isNumber,setIsNumber]=useState(0);

    const [pages,setPages]=useState([
        {
            content:"javascript",
            backgroundColor:"blue",
            color:"white"
        },
        {
            content:"react",
            backgroundColor:"blue",
            color:"white"
        },
        {
            content:"css",
            backgroundColor:"blue",
            color:"white"
        },
        {
            content:"html",
            backgroundColor:"blue",
            color:"white"
        },
        {
            content:"ruby",
            backgroundColor:"blue",
            color:"white"
        },
    ])

    const handleClick=useCallback((e)=>{
        console.log(e.target.textContent)
        setIsNumber((isNumber)=>e.target.textContent-1)
    },[isNumber])
    // const nextNumber=isNumber+1;
    // const previousNumber=isNumber-1;
    const handleNext=useCallback(()=>{
        if(isNumber===pages.length-1){
            setIsNumber((isNumber)=>isNumber)
            return;
        }
        setIsNumber((isNumber)=>isNumber+1)
    },[isNumber])
    const handlePrevious=useCallback(()=>{
        if(isNumber===0){
            setIsNumber((isNumber)=>isNumber)
            return;
        }
        setIsNumber((isNumber)=>isNumber-1)
    },[isNumber])
    return {isNumber,pages,handleClick,handleNext,handlePrevious};
}

export default usePageChange;


