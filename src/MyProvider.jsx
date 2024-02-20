import {createContext,useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
export const myContext=createContext(null)
export const MyProvider=({children})=>{
    const location=useLocation()
    const [page,setPage]=useState(location.pathname)
    const [isHome,setIsHome]=useState(null)
   useEffect(()=>{
    setPage(location.pathname)
    if(page==='/sign'){
        setIsHome(false)
    }
    else{
        setIsHome(true)
    }
   },[location])
   const data={page,isHome}
    return(<myContext.Provider value={data}>
        {children}</myContext.Provider>)
}