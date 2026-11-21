import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      await register(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="auth-wrap">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">CREATE ACCOUNT</span>
        <h1>Join AuthPortal</h1>
        <p className="form-subtitle">Create your account to get started.</p>

        <label>Email Address</label>
        <input type="email" placeholder="you@example.com"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" placeholder="Minimum 6 characters"
          value={password} onChange={(e) => setPassword(e.target.value)}
          minLength={6} required />

        {error && <p className="error">{error}</p>}

        <button className="primary-btn full-btn" disabled={busy}>
          {busy ? "Creating account..." : "Create Account"}
        </button>

        <p className="form-footer">Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </section>
  );
}