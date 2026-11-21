import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">SECURE • SIMPLE • MODERN</span>
        <h1>Your account.<br /><span>Your space.</span></h1>
        <p>
          A modern authentication portal built with React and Firebase.
          Sign up, sign in and securely access your personal dashboard.
        </p>

        <div className="hero-buttons">
          <Link className="primary-btn" to={user ? "/dashboard" : "/register"}>
            {user ? "Open Dashboard" : "Get Started"}
          </Link>
          {!user && <Link className="secondary-btn" to="/login">Sign In</Link>}
        </div>

        <div className="hero-note">Fast · Secure · Responsive</div>
      </div>
      <div className="hero-visual">
        <div className="visual-card">
          <div className="visual-icon">✦</div>
          <span>YOUR DIGITAL SPACE</span>
          <h2>Welcome<br />to AuthPortal</h2>
          <div className="visual-line" />
          <p>Authentication made simple.</p>
        </div>
      </div>
    </section>
  );
}