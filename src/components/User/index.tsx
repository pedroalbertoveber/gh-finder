//external modules
import React from 'react';

//types
import { UserProps } from 'types/user';

//icons
import { MdLocationPin } from 'react-icons/md';

//styles
import styles from './User.module.scss';

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location
}: UserProps) => {
  return (
    <div className={styles.userContainer}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={styles.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={styles.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={styles.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={styles.number}>{following}</p>
        </div>
      </div>
      <a href={`https://www.github.com/${login}`}>Ver melhores repositórios</a>
    </div>
  );
};

export default User;