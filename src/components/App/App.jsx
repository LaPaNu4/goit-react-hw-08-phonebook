import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import { refreshUserThunk } from 'redux/auth/operations';
import {  selectIsRefreshUser,  } from 'redux/auth/selectors';


const LoginPage = lazy(() => import('pages/login/login'));
const RegisterPage = lazy(() => import('pages/register/register'));
const ContactsPage = lazy(() => import('pages/contacts/contacts'));
const Header = lazy(() => import('components/header/header'));
const HomePage = lazy(() => import('pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(selectIsRefreshUser);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [ dispatch, ]);

  if(isRefreshUser) return <h2>Loading...</h2>;
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Toaster />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Suspense>
    </>
  );
};
