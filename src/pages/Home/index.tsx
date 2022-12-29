//external modules
import React, { ReactElement, useState } from 'react';

//styles
import styles from './Home.module.scss';

//components
import Search from 'components/Search';
import User from 'components/User';
import Error from 'components/Error';

//types
import { UserProps } from 'types/user';

const Home = ():ReactElement  => {

  const [ user, setUser ] = useState<UserProps | null>(null);
  const [ error, setError ] = useState<boolean>(false);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if(res.status === 404) {
      setError(true);
      setUser(null);
      return;
    }

    const {
      avatar_url,
      login,
      location,
      followers,
      following,
    } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
    setError(false);
  };

  return (
    <main>
      <div>
        <h1 className={styles.mainTitle}>Github Finder</h1>
      </div>
      <div className={styles.searchContainer}>
        <h3>
          Digite o nome do usuário
        </h3>
        <Search loadUser = {loadUser}/>
        <p>
          E conheça seus melhores repositórios
        </p>
      </div>
      { user && <User {...user}/> }
      { error && <Error /> }
    </main>
  );
};

export default Home;