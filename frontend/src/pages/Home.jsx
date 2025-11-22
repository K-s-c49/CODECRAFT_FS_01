
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      {/* Hero section */}
      <div className="row mb-5">
        <div className="col-12 col-md-8 mx-auto text-center">
          <h1 className="mb-3">Welcome to AuthApp</h1>
          <p className="lead text-muted">
            This is a simple demo application that shows how user
            registration, login, and protected pages work.
          </p>
          <div className="mt-4">
            <Link to="/register" className="btn btn-primary me-2 mb-2">
              Get Started – Register
            </Link>
            <Link to="/login" className="btn btn-outline-primary mb-2">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>

      
      <div className="row">
        <div className="col-12 col-lg-10 mx-auto">
          <h2 className="mb-4 text-center">How to use this site</h2>

          <div className="row g-4">
           
            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">1. Register</h5>
                  <p className="card-text">
                    Go to the <Link to="/register">Register</Link> page and fill
                    in your name, email, and password. When you submit the form,
                    your account will be created and your password will be saved
                    securely (hashed) in the database.
                  </p>
                </div>
              </div>
            </div>

          
            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">2. Login</h5>
                  <p className="card-text">
                    After registering, go to the{" "}
                    <Link to="/login">Login</Link> page. Enter the same email
                    and password. If they are correct, the system will log you
                    in and store a secure token in your browser.
                  </p>
                  <p className="card-text">
                    This token proves that you are authenticated.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">3. Access protected page</h5>
                  <p className="card-text">
                    Once you are logged in, you can open the{" "}
                    <Link to="/protected">Protected Page</Link>. The frontend
                    will send your token to the backend. If the token is valid,
                    the backend will return protected data that normal visitors
                    cannot see.
                  </p>
                  <p className="card-text">
                    If you are not logged in, you will be redirected to the
                    login page.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-5">
            <h3 className="mb-3">What happens behind the scenes?</h3>
            <ul className="list-group">
              <li className="list-group-item">
                When you register, your password is turned into a hash before
                saving, so the original password is never stored in plain text.
              </li>
              <li className="list-group-item">
                When you log in, the backend compares your password with the
                stored hash and, if it matches, returns a JSON Web Token (JWT).
              </li>
              <li className="list-group-item">
                The frontend keeps this token (for example, in localStorage) and
                sends it in the <code>Authorization</code> header for protected
                API calls.
              </li>
              <li className="list-group-item">
                Middleware on the backend checks the token. Only if it is
                valid, the request is allowed to access protected routes.
              </li>
            </ul>
          </div>

          
          <div className="alert alert-info mt-4" role="alert">
            Tip: You can log out using the Logout button in the navbar. This
            removes your token and you will no longer be able to access
            protected pages until you log in again.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
