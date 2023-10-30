import { useState } from 'react';


function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    setInputValue(e.target.value);
    
  };

  async  function handleClick (e) {
    e.preventDefault();
    
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
    const body = await response.json();
    console.log(body);
    
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        
        <input type="text " value={inputValue} onChange={handleInput} />
        <button type="submit">Search </button>
      </form>
    </div>
  );
}

export default Home;
