import { UserMenu } from 'components/usermenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthentificated } from 'redux/auth/selectors';


const Header = () => {
  const authentificated = useSelector(selectAuthentificated);

  return (
    <header>
      <section>
        <div>
          <nav>
            <NavLink to="/">Home</NavLink>
            {authentificated ? (
              <>
                <NavLink to="/contacts">Contacts</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </nav>
          {authentificated && <UserMenu />}
        </div>
      </section>
    </header>
  );
};

export default Header;
