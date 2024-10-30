import React from 'react'
import useStore from '../store/store'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
function Bookcard(props:any) {

  const {setauthor,setNavigate,navigate,showsearch,setshowsearch,setbook,book}=useStore()
  
  
  const handleauthor = () => {
    setauthor(props.authorkey);
    console.log(props.authorkey);}

   const handlebook=()=>{
    setshowsearch(false)
    setbook(props.bookkey)
    console.log(book)
   }
  return (
    <div className=' gap-4 border-orange-500 rounded border-2  px-5'>
      
        <h5 className='mt-4 mb-4 text-xl font-mono font-bold'>{props.title}</h5>
        <p className=' mb-10 text-sm mt-8' onClick={handleauthor}> {props.author}</p>
        <button  onClick={handlebook}className='bg-green-700 font-mono font-bold text-white rounded-lg p-3 mb-3'>Learn more</button>
      
    </div>
  )
}

export default Bookcard
