import { Link } from "react-router-dom";
import { Button } from "../ui/components/Button";
import { Section } from "../ui/components/Section";

export function NotFoundPage() {
  return (
    <Section>
      <div className="notfound">
        <h1 className="h2">404</h1>
        <p className="sub">This page wandered off the expo floor.</p>
        <Button as={Link} to="/" variant="primary">
          Go home
        </Button>
      </div>
    </Section>
  );
}
