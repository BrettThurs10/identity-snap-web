import React, { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { TopNav } from "./components/TopNav";
import { Footer } from "./components/Footer";

export function RootLayout() {
  const location = useLocation();

  // Basic "single-page" analytics hook point.
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("pageview:", location.pathname);
    // Wire up Plausible/GA/etc here if desired.
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <ScrollRestoration />
      <TopNav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
