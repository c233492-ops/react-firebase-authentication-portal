import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <section className="dashboard-wrap">
      <div className="dashboard-card profile-card">
        <span className="eyebrow">ACCOUNT INFORMATION</span>
        <h1>My Profile</h1>

        <div className="profile-avatar">✦</div>

        <div className="profile-details">
          <div>
            <span className="panel-label">EMAIL ADDRESS</span>
            <p>{user?.email}</p>
          </div>
          <div>
            <span className="panel-label">ACCOUNT UID</span>
            <p className="uid">{user?.uid}</p>
          </div>
          <div>
            <span className="panel-label">ACCOUNT STATUS</span>
            <p className="verified">Active & Authenticated</p>
          </div>
        </div>

        <Link to="/dashboard" className="secondary-btn">Back to Dashboard</Link>
      </div>
    </section>
  );
}