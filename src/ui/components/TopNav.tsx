import { Link, NavLink } from "react-router-dom";

export function TopNav() {
  return (
    <header className="topnav">
      <div className="container topnavInner">
        <Link to="/" className="brand" aria-label="IdentitySnap home">
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: 22,
              verticalAlign: "middle",
            }}
          >
            badge
          </span>
          <span className="brandText">IdentitySnap</span>
        </Link>

        <nav className="navlinks" aria-label="Primary">
          <a href="#how-it-works" className="navlink">
            How It Works
          </a>
          <a href="#get" className="navlink">
            Get
          </a>
          <NavLink to="/privacy" className="navlink">
            Privacy
          </NavLink>
        </nav>

        <div className="navCta">
          <a
            href="https://apps.apple.com/us/app/identitysnap/id6757811330"
            target="_blank"
            rel="noopener noreferrer"
            data-cta="nav-get"
            style={{ display: "inline-block", padding: 0 }}
          >
            <img
              src="/images/appleAppstore.png"
              alt="Download on the App Store"
              style={{ height: 56, width: "auto", display: "block" }}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
