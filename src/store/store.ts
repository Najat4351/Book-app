import {create}from "zustand"

interface store{ 

    gohome:boolean;
    setgohome:(newname:boolean)=>void;
    searchValue:string;
    setSearchValue:(newsearch:string)=>void;
    author:string;
    setauthor:(newsearch:string)=>void;
    setNavigate:(newnavigate:boolean)=>void;
    navigate:boolean;
    showsearch:boolean;
    setshowsearch:(newname:boolean)=>void;
    book:string;
    setbook:(newbook:string)=>void;
    home:boolean;
    sethome:(newname:boolean)=>void;
}
const useStore=create<store>((set)=>({
    gohome:false,
    setgohome:(newvalue)=>set(()=>({gohome:newvalue})),
    searchValue:" ", 
    setSearchValue:(newsearch)=>set(()=>({searchValue:newsearch})),
    author:"",
    setauthor:(newauthor)=>set(()=>({author:newauthor})),
    navigate:false,
    setNavigate:(newnavigate)=>set(()=>({navigate:newnavigate})),
    showsearch:false,
    setshowsearch:(newshow)=>set(()=>({showsearch:newshow})),
    book:" ",
    setbook:(newbook)=>set(()=>({book:newbook})),
    home:false,
    sethome:(newvalue)=>set(()=>({gohome:newvalue})),
  } ))

export default useStore;