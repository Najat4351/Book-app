import React from "react"
import {NavLink,Outlet} from "react-router-dom"
import Author from "../components/author";
import useStore from "../store/store";
import Bookcard from "../components/bookcard"
import { useState } from "react";
 const RootLayout: React.FC = () => {
    const { searchValue, setSearchValue } = useStore()

  
    const [bookData, setbookData ] = useState({ docs: []} )
    const {showsearch, setshowsearch } = useStore()
    function getbookData(book: string) {
        if(book.trim()!=" "){
            setshowsearch(!showsearch)
        }
       
        const endpoint = `https://openlibrary.org/search.json?q= ${book}&limit=6`
      

        fetch(endpoint)
            .then((response) => {
             
                return response.json()
            })
            .then((data) => { 
                setbookData(data)
                console.log(data)
             })
            .catch((error) => { console.log(11, error) })

      console.log("fetching")
      
      
      
    }

    return(
        <div>
                <div  className="flex flex-row  w-screen items-center">
                   
                    <img src='/booklogo.jpeg' className=" w-20 h-20 "/>
                    <h1 className="text-green-800 mr-40  ml-0 text-center  font-cursive text-3xl font-bold ">
                       bookio
                    </h1>
             
                    <select id="dropdown" name="options" className="w-24 h-9 p-2 border-none bg-zinc-100 mr-1">
                        
                   <option   value="Author">Author </option>
                   <option value="colleen Hoover">Colleen Hover</option>
                   <option value="j.k.rowling">J.K.Rowling</option>
                   <option value="tahereh mafi">Tahereh Mafi</option>
                   <option value="ana huang">Ana Huang</option>
                  </select>
                    <input type="text" placeholder="search product" onChange={(event) => setSearchValue(event.target.value)} className="w-96 h-9 p-2 border-none bg-zinc-100 "/>
                     <div className="w-20 bg-orange-600  p-2 justify-center  ">
                    <img src='/search1.png' onClick={() => getbookData(searchValue)} className="w-5 h-5 bg-orange-600 ml-5 "/></div>
          
                    <NavLink to="/home" className=" mr-9 ml-60 bg-orange-600 p-1 pl-3 rounded pr-3 text-white">Home</NavLink>
                    <NavLink to="/author" className=' bg-orange-600 p-1 pl-3 rounded pr-3 text-white'>Author</NavLink>
                    
                </div>
           
            <main className="h-full">
                {showsearch ?(<>
                      <div className="flex flex-row justify-evenly mb-16">
                      <div className="bg-green-800 text-white text-m rounded-xl p-2 text-center">Romance</div>
                      <div className="bg-green-800 text-white text-m rounded-xl p-2 text-center">Scary</div>
                      <div className="bg-green-800 text-white text-m rounded-xl p-2 text-center">Business</div>
                      <div className="bg-green-800 text-white text-m rounded-xl p-2 text-center">Comedy</div>
                      </div>
                    <div className="grid grid-cols-3 gap-20 mt-20 ">
        
                  {bookData.docs.map((book:any,index:any)=>{
                    return(<Bookcard  key={index}   
                      title={book.title}  author={book.author_name[0]} authorkey={book.author_key} bookkey={book.edition_key ? book.edition_key[0] : 'Unknown Edition'}/>)
                 })}
                  </div></>):(
              <Outlet/>)}
            </main>
        </div>
        
    )
}
export default RootLayout;