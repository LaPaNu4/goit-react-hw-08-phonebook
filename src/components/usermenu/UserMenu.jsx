import { useDispatch, useSelector } from 'react-redux';

import { logoutUserThunk } from 'redux/auth/operations';
import { selectUserData } from 'redux/auth/selectors';
import { Div } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <Div>
      {userData && <p>{userData.email}</p>}
      <button className="Logout" onClick={handleLogOut}>
        Logout
      </button>
    </Div>
  );
};
