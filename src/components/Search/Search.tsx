import React, { useEffect, useState } from 'react';
import './styles.scss';

interface Props {
  search: (name: string) => void;
}

const Search = ({ search }: Props): JSX.Element => {
  const [searchName, setSearchName] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchName(value);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  useEffect((): void => {
    search(searchName);
  }, [searchName, search]);

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        placeholder='Search'
        value={searchName}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default Search;
