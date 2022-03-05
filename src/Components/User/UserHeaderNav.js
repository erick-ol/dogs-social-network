import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as Logout } from '../../Assets/sair.svg';
import styles from './css/UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <MyPhotos />
        {mobile && 'My Photos'}
      </NavLink>
      <NavLink to="/account/stats">
        <Stats />
        {mobile && 'Stats'}
      </NavLink>
      <NavLink to="/account/post">
        <AddPhoto />
        {mobile && 'Add Photo'}
      </NavLink>
      <button onClick={userLogout}>
        <Logout />
        {mobile && 'Logout'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
