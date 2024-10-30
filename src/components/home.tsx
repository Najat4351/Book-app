
import useStore from "../store/store"
import { useState,useEffect } from "react";

function Home() {
 const { book, setbook } = useStore();
  const [bookData, setbookData] = useState<any>(null);

  useEffect(() => {
    const fetchBookData = async () => {
      const endpoint = `https://openlibrary.org/books/${book}.json`;
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setbookData(data);
        console.log(data);
      } catch (error) {
        console.log(11, error);
      }
    };

    if (book) {
      fetchBookData();
    }
    console.log("fetching book");
  }, [book]);

  console.log(bookData);
  
  return (<>
    
    <div className="mt-20">
      <h1 className="text-green-800 font-mono font-bold text-2xl ">Book Information</h1></div>
      {bookData ? (
          <div className="mt-12 w-60 mx-auto border-2 border-green-800 px-2  rounded">
            <h1 className="mb-5 font-bold"><span className="font-bold text-orange-600 mt-2">Title:</span>{bookData.title}</h1>
           {/* <h2 className="mb-5 "><span className="font-bold text-orange-600">Description:</span>{bookData.description}</h2>*/}
            <p><span className="font-bold text-orange-600">Number of pages:</span>{bookData.number_of_pages}</p>
            <p>  {bookData.publish_Date}</p>
          </div>
        ) : (
          <p>Search for a book...</p>
        )}
      </>
   
  )
}

export default Home