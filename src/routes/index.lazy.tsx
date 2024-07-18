import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <h3>Welcome Home!</h3>
    </main>
  );
}
