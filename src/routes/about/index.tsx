import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";

const productSearchSchema = z.object({
  page: z.number().catch(1).optional(),
  filter: z.string().catch("").optional(),
  sort: z.enum(["newest", "oldest", "price"]).catch("newest").optional(),
});

export const Route = createFileRoute("/about/")({
  validateSearch: (search) => productSearchSchema.parse(search),
  component: Index,
});

function Index() {
  const navigate = useNavigate({ from: Route.fullPath });
  const { page, filter, sort } = Route.useSearch();

  const onClick = () => {
    navigate({
      search: {
        page: (page ?? 0) + 1,
        filter: "test",
        sort: "newest",
      },
    });
  };

  return (
    <main>
      <h1>About</h1>
      <p>Page: {page}</p>
      <p>Filter: {filter}</p>
      <p>Sort: {sort}</p>
      <Link
        to="/about"
        search={{
          page: 2,
          filter: "test",
          sort: "newest",
        }}
      >
        Test Search Params
      </Link>
      <button onClick={onClick}>Update Search Params</button>
    </main>
  );
}
