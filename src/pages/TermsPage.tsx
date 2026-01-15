import React from "react";
import { Link } from "react-router-dom";
import { Section } from "../ui/components/Section";

export function TermsPage() {
  return (
    <Section bg="deep">
      <div className="legal">
        <h1 className="h2">Terms of Service</h1>
        <p className="micro muted">Last Updated: January 9, 2026</p>

        <h3 className="h3">1. Acceptance of Terms</h3>
        <p>
          By downloading or using IdentitySnap (the "App"), you agree to be
          bound by these Terms of Service. If you do not agree, do not use the
          App.
        </p>

        <h3 className="h3">2. Use of the App</h3>
        <p>
          IdentitySnap is a tool for scanning and organizing business contact
          information. You agree to use the App only for lawful purposes and in
          accordance with these Terms.
        </p>

        <h3 className="h3">3. User Responsibility</h3>
        <ul className="list">
          <li>
            <strong>Data Safety:</strong> You are solely responsible for backing
            up the data stored on your device. The App is provided "as-is," and
            we are not liable for any loss of data caused by device failure, app
            errors, or accidental deletion.
          </li>
          <li>
            <strong>Privacy of Others:</strong> You agree to respect the privacy
            rights of the individuals whose information you scan or store using
            the App.
          </li>
        </ul>

        <h3 className="h3">4. Intellectual Property</h3>
        <p>
          The App and its original content, features, and functionality are
          owned by IdentitySnap and are protected by international copyright,
          trademark, and other intellectual property laws.
        </p>

        <h3 className="h3">5. Disclaimer of Warranties</h3>
        <p>
          The App is provided on an "AS IS" and "AS AVAILABLE" basis. We make no
          warranties, expressed or implied, regarding the reliability, accuracy,
          or availability of the App. We do not guarantee that the OCR (Optical
          Character Recognition) features will be 100% accurate.
        </p>

        <h3 className="h3">6. Limitation of Liability</h3>
        <p>
          In no event shall IdentitySnap be liable for any indirect, incidental,
          special, consequential, or punitive damages arising out of or related
          to your use of the App.
        </p>

        <h3 className="h3">7. Changes to Terms</h3>
        <p>
          We reserve the right to modify these Terms at any time. Your continued
          use of the App following any changes indicates your acceptance of the
          new Terms.
        </p>

        <h3 className="h3">8. Governing Law</h3>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the United States.
        </p>

        <p className="micro muted" style={{ marginTop: 16 }}>
          <Link to="/">← Back to home</Link>
        </p>
      </div>
    </Section>
  );
}
