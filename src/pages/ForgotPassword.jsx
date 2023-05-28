import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault()
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email Send", {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (error) {
      toast.error("Not Sent", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="Enter Email" onChange={onChange} value={email} />
        <button type="submit">Sent Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
