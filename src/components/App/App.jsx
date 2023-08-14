import { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';


const LoginPage = lazy(()=> import('pages/login/login'))
const RegisterPage = lazy(() => import('pages/register/register'));

export const App = () => {
  return (
    <Router>
      <div>
        <header>
          <div>
            <nav>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
            </nav>
          </div>
        </header>
        <main>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/contacts" element={<h2>contact</h2>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};
