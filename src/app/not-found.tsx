import { ActionLink } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <p className="eyebrow">404 · A little off course</p>
      <h1>This page isn’t here.</h1>
      <p>
        The link may have changed, or the project hasn’t been published yet.
      </p>
      <ActionLink href="/">Back to the portfolio</ActionLink>
    </main>
  );
}
