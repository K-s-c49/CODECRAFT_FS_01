import { useEffect, useState } from "react";
import api from "../api";

function ProtectedPage({ token }) {
  const [message, setMessage] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function fetchProtected() {
      try {
        // prefer prop token, fall back to localStorage
        const storedToken = token || localStorage.getItem("token");
        if (!storedToken) {
          setMessage("No token found. Please log in first.");
          return;
        }

        const res = await api.get("/protected", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        setMessage(res.data.message || "Protected data loaded.");
        setUserInfo(res.data.user || res.data);
      } catch (err) {
        const msg =
          err.response?.data?.message ||
          "Could not load protected data. Maybe token is invalid.";
        setMessage(msg);
      }
    }

    fetchProtected();
  }, [token]);

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="row w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Protected Page
              </h2>

              {message && (
                <div
                  className={`alert ${
                    message.toLowerCase().includes("loaded") ||
                    message.toLowerCase().includes("authenticated")
                      ? "alert-success"
                      : "alert-info"
                  }`}
                  role="alert"
                >
                  {message}
                </div>
              )}

              {userInfo && (
                <div className="mt-3">
                  <h5>User / Protected Data</h5>
                  <pre className="bg-light p-3 rounded small">
                    {JSON.stringify(userInfo, null, 2)}
                  </pre>
                </div>
              )}

              {!userInfo && (
                <p className="text-muted mt-3 mb-0">
                  If you just logged in, this page should show data that is
                  only available to authenticated users.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProtectedPage;
