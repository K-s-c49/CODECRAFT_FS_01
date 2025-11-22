import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Login({ setToken, setUser, setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      const token = res.data.token;
      const user = res.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setToken(token);
      setUser(user);
      setIsAuthenticated(true);

      setMessage("Login successful");
      navigate("/protected");
    } catch (err) {
      const msg =
        err.response?.data?.message || "Login failed. Check credentials.";
      setMessage(msg);
    }
  }

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>

              {message && (
                <div
                  className={`alert ${
                    message === "Login successful"
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                  role="alert"
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="you@example.com"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mt-2"
                >
                  Login
                </button>
              </form>

              
              <p className="text-center mt-3 mb-0 text-muted">
                Don&apos;t have an account? Sign up from the Register page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
