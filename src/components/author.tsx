import  useStore  from "../store/store"
import { useState,useEffect } from "react"
import { Navigate } from "react-router-dom";
function Author() {
 
  const { author, setauthor ,home,sethome} = useStore();
  const [authorData, setauthorData] = useState<any>(null);
  const showhome=()=>{
sethome(true)
  }

  useEffect(() => {
    const fetchAuthorData = async () => {
      const endpoint = `https://openlibrary.org/authors/${author}.json`;
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setauthorData(data);
        console.log(data);
      } catch (error) {
        console.log(11, error);
      }
    };

    if (author) {
      fetchAuthorData();
    }
    console.log("fetching author");
  }, [author]);

  console.log(authorData);
  
 
    return (<>
      <div className="text-start text-orange-600 mt-1" onClick={showhome}>Back</div>
      <div className="mt-20">
        <h1 className="text-green-800 font-mono font-bold text-2xl ">Author Information</h1>
        {authorData ? (
          <div className="mt-12 w-fit mx-auto  border-2 border-green-800 px-2  rounded">
            <h2 className="mb-5 font-bold"><span className="font-bold text-orange-600">Name:</span>{authorData.name}</h2>
            <p> <span className="font-bold text-orange-600">Bio:</span>{authorData.bio}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div></>
    );
  
  
}

export default Author
