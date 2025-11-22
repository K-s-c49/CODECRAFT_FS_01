import { Navigate } from "react-router-dom";

function PrivateRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    // not logged in -> go to login
    return <Navigate to="/login" replace />;
  }

  // logged in -> show the protected page
  return children;
}

export default PrivateRoute;
