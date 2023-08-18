import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import { refreshUserThunk } from 'redux/auth/operations';
import { selectAuthentificated, selectIsRefreshUser, selectToken } from 'redux/auth/selectors';


const LoginPage = lazy(() => import('pages/login/login'));
const RegisterPage = lazy(() => import('pages/register/register'));
const ContactsPage = lazy(() => import('pages/contacts/contacts'));
const Header = lazy(() => import('components/header/header'));
const HomePage = lazy(() => import('pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);
  const isRefreshUser = useSelector(selectIsRefreshUser);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  if(isRefreshUser) return <p>Loading...</p>;
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
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
