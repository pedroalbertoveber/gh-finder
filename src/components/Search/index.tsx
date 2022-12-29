//external modules
import React, { ReactElement, useState } from 'react';
//icons
import { BsSearch } from 'react-icons/bs';
//styles
import styles from './Search.module.scss';

type SearchProps = {
  loadUser: (userName: string) => Promise<void>,
}

const Search = ({ loadUser }: SearchProps ):ReactElement => {

  const [ userName, setUserName ] = useState<string>('');
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName);
    } 
  }

  return (
    <div className={styles.searchContainer}>
      <input type='text' placeholder='Digite o nome do usuário' value={userName} onChange={(e) => {
        setUserName(e.target.value)
      }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => loadUser(userName)}>
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
