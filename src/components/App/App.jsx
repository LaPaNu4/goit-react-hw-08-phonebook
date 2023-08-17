import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import {
  selectAuthentificated,
  selectToken,
  
} from 'redux/authReducer';
import {  refreshUserThunk } from 'redux/operations';

const LoginPage = lazy(() => import('pages/login/login'));
const RegisterPage = lazy(() => import('pages/register/register'));
const ContactsPage = lazy(() => import('pages/contacts/contacts'));
const Header = lazy(() => import('components/header/header'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);



  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<h2>Welcome to Contact</h2>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
