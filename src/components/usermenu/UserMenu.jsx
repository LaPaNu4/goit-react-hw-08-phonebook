import { useDispatch, useSelector } from 'react-redux';

import { logoutUserThunk } from 'redux/auth/operations';
import { selectUserData } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <p>{userData.email}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
