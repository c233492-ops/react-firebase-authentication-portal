import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section className="dashboard-wrap">
      <div className="dashboard-card">
        <span className="eyebrow">PRIVATE AREA</span>
        <h1>Welcome aboard!</h1>
        <p className="form-subtitle">You are successfully authenticated.</p>

        <div className="user-panel">
          <div className="avatar">✦</div>
          <div>
            <span className="panel-label">SIGNED IN AS</span>
            <p className="user-email">{user?.email}</p>
          </div>
        </div>

        <div className="status-row">
          <span className="status-dot"></span>
          Authentication Status: Verified Session
        </div>

        <Link to="/profile" className="primary-btn">View My Profile</Link>
      </div>
    </section>
  );
}