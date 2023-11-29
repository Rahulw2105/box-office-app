import { useState } from 'react';

import { searchForShow, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';

function Home() {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  // shows or actors based on that request we will search

  async function handleClick({ q, searchOption }) {
    try {
      setApiDataError(null);
      if (searchForShow === 'shows') {
        const result = await searchForShow(q);
        setApiData(result);
      } else {
        const result = await searchForPeople(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  }

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message} </div>;
    }
    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <div>
      <SearchForm handleClick={handleClick} />
      <div>{renderApiData()}</div>
    </div>
  );
}

export default Home;
