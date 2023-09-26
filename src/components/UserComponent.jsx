import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect, useSelector } from "react-redux";

function UserComponent({ fetchUsers, user }) {
  //   const user = useSelector((state) => state.user);
  useEffect(() => fetchUsers(), []);
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
