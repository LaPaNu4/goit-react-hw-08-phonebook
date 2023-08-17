import { UserMenu } from 'components/usermenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthentificated } from 'redux/auth/selectors';


const Header = () => {
  const authentificated = useSelector(selectAuthentificated);

  return (
    <div>
      <nav>
        {authentificated ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
