import React, { useContext } from "react";
import { AuthUserContext } from "../context/AudioPlayerApi";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  let { authUser } = useContext(AuthUserContext);

  //! This is for profile container
  if (authUser == null) {
    return <Navigate to={"/auth/login"} />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoutes;