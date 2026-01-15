import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./ui/RootLayout";
import { LandingPage } from "./pages/LandingPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
