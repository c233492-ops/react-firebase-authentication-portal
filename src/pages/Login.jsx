import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="auth-wrap">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Sign in</h1>
        <p className="form-subtitle">Access your personal dashboard.</p>

        <label>Email Address</label>
        <input type="email" placeholder="you@example.com"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password"
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        {error && <p className="error">{error}</p>}

        <button className="primary-btn full-btn" disabled={busy}>
          {busy ? "Signing in..." : "Sign In"}
        </button>

        <p className="form-footer">New here? <Link to="/register">Create an account</Link></p>
      </form>
    </section>
  );
}