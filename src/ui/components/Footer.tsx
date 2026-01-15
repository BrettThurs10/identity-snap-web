import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="micro muted">
          © {new Date().getFullYear()} IdentitySnap
        </div>
        <div className="footerLinks">
          <Link to="/privacy" className="micro">
            Privacy
          </Link>
          <span className="dot" />
          <Link to="/terms" className="micro">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
