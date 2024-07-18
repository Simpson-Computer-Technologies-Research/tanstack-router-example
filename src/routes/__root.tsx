import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      {/** This would be the sidebar */}
      <section>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </section>

      {/** This would be the page content */}
      <Outlet />
    </>
  ),
});
