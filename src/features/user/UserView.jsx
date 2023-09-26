import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>User Component</h2>
      {user.loading ? (
        <p>Loading...</p>
      ) : user.error ? (
        <p>An error occured : {user.error}</p>
      ) : (
        user.users.map((u) => <p key={u.name}>{u.name}</p>)
      )}
    </div>
  );
};

export default UserView;
