import { UserMenu } from 'components/usermenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthentificated } from 'redux/auth/selectors';
import { Section, Div, } from './header.styled';


const Header = () => {
  const authentificated = useSelector(selectAuthentificated);

  return (
    <header>
      <Section>
        <Div>
          <nav className="nav">
            <NavLink className={'button-8'} to="/">
              Home
            </NavLink>
            {authentificated ? (
              <>
                <NavLink className={'button-8'} to="/contacts">
                  Contacts
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className={'button-8'} to="/login">
                  Login
                </NavLink>
                <NavLink className={'button-8'} to="/register">
                  Register
                </NavLink>
              </>
            )}
          </nav>
          {authentificated && <UserMenu />}
        </Div>
      </Section>
    </header>
  );
};

export default Header;
