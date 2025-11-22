import { useState } from "react";
import api from "../api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });
      setMessage(res.data.message || "Registered successfully");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      const msg =
        err.response?.data?.message || "Registration failed. Try again.";
      setMessage(msg);
    }
  }

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>

              {message && (
                <div
                  className={`alert ${
                    message.toLowerCase().includes("success")
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
                  <label className="form-label">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Your name"
                    className="form-control"
                    required
                  />
                </div>

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
                  Sign up
                </button>
              </form>

              <p className="text-center mt-3 mb-0 text-muted">
                Already have an account? Go to the Login page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
