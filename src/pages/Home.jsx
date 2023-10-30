import { useState } from 'react';

import { searchForShow } from "./../api/tvmaze"

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [apiData , setApiData ]= useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  console.log(apiDataError);

  const handleInput = e => {
    setInputValue(e.target.value);
    
  };

  async  function handleClick (e) {
    e.preventDefault();
    try {
      setApiDataError(null);
      const result = await searchForShow(inputValue);
   setApiData(result);
      
    } catch (error) {
      setApiDataError(error);
      
    }

   
    
  }

  const renderApiData =  () => {

    if(apiDataError){
      return <div>Error occured: {apiDataError.message} </div>
    }
    if(apiData) {
      return apiData.map((data) =>  <div key = {data.show.id}>{data.show.name}</div>)
    }
    return null;

  };

  return (
    <div>
      <form onSubmit={handleClick}>
        
        <input type="text " value={inputValue} onChange={handleInput} />
        <button type="submit">Search </button>
      </form>
      <div>
        {renderApiData()}

      </div>

    </div>
  );
}

export default Home;
