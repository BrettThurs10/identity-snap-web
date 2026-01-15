import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../ui/components/Section";

export function PrivacyPage() {
  return (
    <Section bg="deep">
      <div className="legal">
        <h1 className="h2">Privacy Policy for IdentitySnap</h1>
        <p className="micro muted">Last Updated: January 9, 2026</p>

        <h3 className="h3">1. Introduction</h3>
        <p>
          IdentitySnap ("we," "our," or "us") respects your privacy. This
          Privacy Policy explains how we collect, use, and protect your
          information when you use our mobile application (the "App").
        </p>

        <h3 className="h3">2. Data We Collect</h3>
        <ul className="list">
          <li>
            <strong>We do NOT store your data on our servers.</strong>
          </li>
          <li>
            All business card scans, contact information, and images are stored
            locally on your device.
          </li>
          <li>
            We do not have access to the leads you collect or the profiles you
            create.
          </li>
        </ul>

        <h3 className="h3">3. Permissions</h3>
        <ul className="list">
          <li>
            <strong>Camera:</strong> Used strictly to scan business cards and
            badges. Images are processed locally and saved to your device's
            storage.
          </li>
          <li>
            <strong>Photo Library:</strong> Used to save scanned images or to
            select a profile picture.
          </li>
          <li>
            <strong>Microphone (Optional):</strong> Used only if you choose to
            record voice notes attached to leads.
          </li>
        </ul>

        <h3 className="h3">4. Data Sharing</h3>
        <ul className="list">
          <li>
            Your data is stored locally; we cannot share it with third parties.
          </li>
          <li>
            <strong>User-Initiated Sharing:</strong> You may choose to export
            your data (via CSV or JSON file) and share it via other apps (e.g.,
            Email, AirDrop). This sharing is controlled entirely by you.
          </li>
        </ul>

        <h3 className="h3">5. Analytics and Feedback</h3>
        <ul className="list">
          <li>
            We do not use third-party analytics trackers that monitor your
            behavior.
          </li>
          <li>
            <strong>Feedback:</strong> If you voluntarily send us feedback via
            email, we will receive your email address and any device information
            (OS version, App version) you allow to be attached for debugging
            purposes.
          </li>
        </ul>

        <h3 className="h3">6. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. If we make
          significant changes (e.g., if we introduce cloud sync features), we
          will notify you through the App.
        </p>

        <h3 className="h3">7. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:heyidentitysnap@gmail.com">
            heyidentitysnap@gmail.com
          </a>
          .
        </p>

        <p className="micro muted" style={{ marginTop: 16 }}>
          <Link to="/">← Back to home</Link>
        </p>
      </div>
    </Section>
  );
}
