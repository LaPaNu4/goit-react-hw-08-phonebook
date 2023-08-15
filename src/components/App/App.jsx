import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { selectAuthentificated, selectToken, selectUserData, } from 'redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';


const LoginPage = lazy(()=> import('pages/login/login'))
const RegisterPage = lazy(() => import('pages/register/register'));
const ContactsPage = lazy(()=> import('pages/contacts/contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);
  const userData = useSelector(selectUserData);



 useEffect(() => {
   if (!token || authentificated) return;

   dispatch(refreshUserThunk());
 }, [token, dispatch, authentificated]);
  
  
  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };


  return (
    <Router>
      <div>
        <header>
          <div>
            <nav>
              {authentificated ? (
                <>
                  <NavLink to="/contacts">Contacts</NavLink>
                  <div>
                    <p>{userData.email}</p>
                    <button onClick={handleLogOut}>Logout</button>
                  </div>
                </>
              ) : (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
                </>
              )}
            </nav>
          </div>
        </header>
        <main>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contacts" element={<ContactsPage/>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};
