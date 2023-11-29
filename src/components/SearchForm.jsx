import { useState } from 'react';
const SearchForm = ({ handleClick }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const handleInput = e => {
    setInputValue(e.target.value);
  };
  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const options = {
      q: inputValue,
      searchOption,
    };

    handleClick(options);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text " value={inputValue} onChange={handleInput} />
        <label>
          Shows
          <input
            type="radio"
            value="shows"
            name="search-option"
            checked={searchOption === 'shows'}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            value="actors"
            name="search-option"
            checked={searchOption === 'actors'}
            onChange={onRadioChange}
          />
        </label>

        <button type="submit">Search </button>
      </form>
    </div>
  );
};

export default SearchForm;
