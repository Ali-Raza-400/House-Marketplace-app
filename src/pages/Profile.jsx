import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate= useNavigate()
  const [users, setUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    setUser(auth.currentUser);
  }, []);
  const LogoutHandler=()=>{
    const auth = getAuth();
    auth.signOut()
    navigate('/sign-in')
  }
  return (
    <div>
      {users ? (
        <div>
          <h1>User Name :{users.displayName}</h1>
          <h1>User Email :{users.email}</h1>
          <button className="logOut" onClick={LogoutHandler}>Logout</button>
        </div>
      ) : (
        <h1>User Not Logined</h1>
      )}

    </div>
  );
};

export default Profile;
