import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center">
        <Spinner></Spinner>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
