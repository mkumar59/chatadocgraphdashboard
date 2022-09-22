import React, { useState } from 'react'
import Books from './Books';


const  AppOne = () => { 
const [showCompleteResults, setCompleteResults] = useState(false);
  const [showPendingResults, setPendingResults] = useState(false);
  const [showCancelResults, setCancelResults] = useState(false);

  
  const handleClick = (e) => {
    var id = e.target.id;
    e.preventDefault();  
     
    if(id=="CC1")
    {
        setCompleteResults(true);
        setPendingResults(false);
        setCancelResults(false);
    }else  if(id=="CC2")
    {
        setCompleteResults(false);
        setPendingResults(true);
        setCancelResults(false);
    }else{
        setCompleteResults(false);
        setPendingResults(false);
        setCancelResults(true);
    }
     
  }
  

  return (
    <div>
      <h1>ParentPage</h1>
      <input type="submit" id="CC1" value="Completed" onClick={handleClick} />
      <input type="submit" id="CC2" value="Pending" onClick={handleClick} />
      <input type="submit" id="CC4" value="Cancel" onClick={handleClick} />
      <div>
      { showCompleteResults ? <Completepage /> : null }
      { showPendingResults ? <PendingPage /> : null }
      { showCancelResults ? <CancelPage /> : null }
     
        {/* <Books books={getbooks}/> */}
      </div>
    </div>
  );


}
const Completepage = () => (
    <div id="results" className="search-results">
     Complete Result;
    </div>
  )
  const PendingPage = () => (
    <div id="results" className="search-results">
     Pending page Result;
    </div>
  )
  const CancelPage = () => (
    <div id="results" className="search-results">
     Cancel page Result;
    </div>
  )


export default AppOne;