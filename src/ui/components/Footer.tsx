import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="micro muted">
          © {new Date().getFullYear()} IdentitySnap
        </div>
        <div className="micro" style={{ marginTop: 4 }}>
          <a
            href="https://github.com/BrettThurs10"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "underline dotted" }}
          >
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            in Mobile, AL
          </a>
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
