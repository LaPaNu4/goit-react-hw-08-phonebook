import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "redux/authReducer";
import { logoutUserThunk } from "redux/operations";

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
}