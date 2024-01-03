import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[100vh] bg-white flex justify-center pt-10">
        <span className="loading loading-spinner text-warning"></span>
      </div>
    );
  }
  {
    if (user) {
      return children;
    }
  }
  return <Navigate to={`/login`}></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
