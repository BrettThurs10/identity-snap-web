import { Link } from "react-router-dom";
import { FAQ } from "../ui/components/FAQItem";
import { FeatureGrid } from "../ui/components/FeatureGrid";
import { Pill } from "../ui/components/Pill";
import { Pricing } from "../ui/components/Pricing";
import { Section } from "../ui/components/Section";
import { Steps } from "../ui/components/Steps";
import { useEffect } from "react";

export function LandingPage() {
  const downloadIOSURL =
    "https://apps.apple.com/us/app/identitysnap/id6757811330";
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.dispatchEvent(new Event("prerender-ready"));
    }
  }, []);
  return (
    <div>
      {/* HERO */}
      <Section className="hero" bg="muted">
        <div className="heroGrid">
          <div>
            <div className="heroPills">
              <Pill>Offline-first</Pill>
              <Pill>No account required</Pill>
              <Pill>Keeps images</Pill>
            </div>
            <h1 className="h1">
              Offline Business Card & Badge Scanner for Events
            </h1>
            <p className="sub">Snap the moment. Keep the lead.</p>
            <p className="lead">
              IdentitySnap turns real-world conversations into follow-ups you
              can actually do. Scan business cards and badges, review instantly,
              then export or share—without relying on Wi‑Fi. Built for
              exhibitors, conference teams, recruiters, and field sales.
            </p>

            <div className="ctaRow">
              <a
                href={downloadIOSURL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-primary"
                style={{ display: "inline-block" }}
              >
                <img
                  src="/images/appleAppstore.png"
                  alt="Download on the App Store"
                  style={{ height: 68, width: "auto", display: "block" }}
                />
              </a>
            </div>

            <div className="trustRow" aria-label="Trust signals">
              <div className="trustItem">
                <strong>Works offline</strong>
                <span>No Wi‑Fi? No problem.</span>
              </div>
              <div className="trustItem">
                <strong>Private by default</strong>
                <span>Data stays on-device.</span>
              </div>
              <div className="trustItem">
                <strong>Export anytime</strong>
                <span>CSV + share with images.</span>
              </div>
            </div>

            <p className="micro">It's free to use and your data is yours!</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src="/images/preview.png"
              alt="IdentitySnap app preview showing offline scanning of a conference badge and a saved lead"
              style={{
                width: "100%",
                maxWidth: 600,
                height: "auto",
                borderRadius: 16,
              }}
            />
          </div>
        </div>
      </Section>

      {/* <Section>
        <div className="heroCard" id="demo">
          <div className="heroCardHeader">
            <div>
              <div className="kicker">Live preview</div>
              <div className="heroCardTitle">From badge → clean lead</div>
            </div>
            <Pill subtle>Local-only</Pill>
          </div>
          <CapturePreview />
          <div className="heroCardFooter">
            <span className="micro">
              Includes original images for reference + auditability.
            </span>
          </div>
        </div>
      </Section> */}

      {/* HOW IT WORKS */}
      <Section bg="gradient" id="how-it-works">
        <div className="sectionHead">
          <h2 className="h2">It couldn't be easier to follow up with a lead</h2>
          <p className="sub">
            Streamlined for the event floor. Powerful when you’re back at your
            desk.
          </p>
        </div>
        <Steps
          steps={[
            {
              title: "1. Scan",
              body: "Capture business cards or badges instantly with IdentitySnap. Scan in rapid succession or at your own pace.",
              image: "/images/richard1.png",
            },
            {
              title: "2. Review Data",
              body: "IdentitySnap extracts all details offline. Edit on the spot, and tap email or phone icons to connect immediately.",
              image: "/images/richard2.png",
            },
            {
              title: "3. Add context",
              body: "Enrich each lead with custom fields or notes while details are fresh. Tag by event for seamless organization.",
              image: "/images/richard3.png",
            },
            {
              title: "4. Export or Share",
              body: "Export to CSV or share lead lists—including images—with teammates or other IdentitySnap users.",
              image: "/images/richard4.png",
            },
          ]}
        />
      </Section>

      {/* VALUE PROPS */}
      <Section bg="dual-radial">
        <div className="sectionHead">
          <h2 className="h2">Built for busy events</h2>
          <p className="sub">
            The floor is loud, Wi‑Fi is flaky, and your future self deserves
            clean data.
          </p>
        </div>

        <FeatureGrid
          items={[
            {
              title: "Offline data capture",
              body: "Scan in airplane mode. Keep moving even when the venue network melts down.",
            },
            {
              title: "Fast, accurate extraction",
              body: "Pull names, emails, phones, roles, and companies—then edit anything instantly.",
            },
            {
              title: "Quality control",
              body: "Low-confidence scans are flagged for quick review and correction.",
            },
            {
              title: "Export + share",
              body: "CSV export plus image-inclusive sharing for teammates and CRMs.",
            },
            {
              title: "Event context",
              body: "Group leads by event so follow-up doesn’t turn into archaeological work.",
            },
            {
              title: "Privacy-respecting",
              body: "No account required. Your data stays on your device unless you choose to sync later.",
            },
          ]}
        />
      </Section>

      {/* SOCIAL PROOF */}
      {/* <Section>
        <div className="sectionHead">
          <h2 className="h2">Built for real-world chaos</h2>
          <p className="sub">
            A few “oh thank goodness” moments users tend to report.
          </p>
        </div>
        <TestimonialRow
          testimonials={[
            {
              quote:
                "The venue Wi‑Fi died and we kept scanning. That alone saved the booth.",
              who: "Exhibitor • B2B SaaS",
            },
            {
              quote:
                "Having the original badge image makes cleanup and disputes basically disappear.",
              who: "Event lead • Conferences",
            },
            {
              quote:
                "I exported a clean CSV before I even got to the hotel elevator.",
              who: "Sales • Field events",
            },
          ]}
        />
        <p className="micro muted" style={{ marginTop: 12 }}>
          Note: testimonials here are placeholders—swap with real ones as you
          collect them.
        </p>
      </Section> */}

      {/* PRICING */}
      <Section bg="deep">
        <div className="sectionHead">
          <h2 className="h2">Free to start. Upgrade when you need it.</h2>
          <p className="sub">No bait-and-switch. Core scanning stays free.</p>
        </div>
        <Pricing
          tiers={[
            {
              name: "Free",
              price: "$0",
              blurb: "Everything you need on the event floor.",
              features: [
                "Unlimited local scans",
                "Review + edit",
                "Export CSV",
                "Share lead lists with images",
                "Organize by event",
              ],
              cta: {
                label: "Download iOS",
                href: downloadIOSURL,
              },
              highlight: true,
            },
            {
              name: "Premium (coming soon)",
              price: "TBD",
              blurb: "For teams and multi-device workflows.",
              features: [
                "Cloud sync (leads, images, events)",
                "Web dashboard",
                "Team collaboration",
                "Analytics + advanced exports",
                "CRM integrations",
              ],
              cta: { label: "Join waitlist", href: "#waitlist" },
            },
          ]}
        />
      </Section>

      {/* CTA / GET */}
      <Section className="cta" id="get">
        <div
          className="ctaBox"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <div style={{ textAlign: "center", justifyContent: "center" }}>
            <h2 className="h2">Ready to capture leads without the circus?</h2>
            <p className="sub" style={{ textAlign: "center" }}>
              It's free to use. Keep your data local. Export anytime. Sync later
              if you want.
            </p>
          </div>

          <div className="storeRow" style={{ justifyContent: "center" }}>
            {/* Replace these links with your App Store / Play Store URLs */}
            <a
              href={downloadIOSURL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="store-ios"
              style={{ display: "inline-block" }}
            >
              <img
                src="/images/appleAppstore.png"
                alt="Download on the App Store"
                style={{ height: 78, width: "auto", display: "block" }}
              />
            </a>
            {/* <Button
              as="a"
              href={downloadAndroidURL}
              variant="outline"
              data-cta="store-android"
            >
              Google Play
            </Button> */}
          </div>

          <div className="ctaMeta">
            <span className="micro">No login required. No server upload.</span>
            <span className="micro muted">
              By downloading you agree to our <Link to="/terms">Terms</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </span>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="dual-radial">
        <div className="sectionHead">
          <h2 className="h2">FAQ</h2>
          <p className="sub">
            The stuff your skeptical brain will ask (as it should).
          </p>
        </div>
        <FAQ
          items={[
            {
              q: "Do I need an account?",
              a: "No. IdentitySnap works without sign-up. Your data stays on your device.",
            },
            {
              q: "Does it work offline?",
              a: "Yes—scanning, review, and organizing are offline-first.",
            },
            {
              q: "Can I export to my CRM?",
              a: "You can export a CSV today. Premium will add a dashboard and more integrations.",
            },
            {
              q: "Do you store my contacts on a server?",
              a: "Not in the free tier. Premium sync will be optional and explicit.",
            },
            {
              q: "Can I share leads with my team?",
              a: "Yes. You can share lead list files (including images) via AirDrop / Nearby Share, etc.",
            },
          ]}
        />
      </Section>

      {/* WAITLIST SIGNUP */}
      <Section className="cta" id="waitlist" bg="dark">
        <div className="ctaBox" style={{ padding: 64 }}>
          <div className="sectionHead" style={{ textAlign: "center" }}>
            <h2 className="h2">Join the waitlist for premium features like:</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "center",
                paddingTop: 16,
                paddingBottom: 16,
              }}
            >
              <span>Cloud sync across devices</span>
              <span>Web dashboard for lead management</span>
              <span>Team collaboration tools</span>
              <span>CRM integrations</span>
              <span>Advanced analytics and exports</span>
            </div>
            <p>No spam—just a heads up when it’s ready.</p>
          </div>
          <a
            href="https://forms.gle/rk1THij1poyEDEVY9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: 12,
              borderRadius: 8,
              background: "var(--primary)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              margin: "0 auto",
            }}
          >
            Join Waitlist
          </a>
        </div>
      </Section>

      {/* FOOTER NOTE */}
      <Section className="footnote">
        <p className="micro muted">
          IdentitySnap is a product focused on privacy-respecting lead capture.
          “Snap the moment. Keep the lead.”
          <span style={{ marginLeft: 8 }}>
            <Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link>
          </span>
        </p>
      </Section>
    </div>
  );
}
