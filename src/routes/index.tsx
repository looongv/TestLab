import { createFileRoute } from "@tanstack/react-router";
import { UiWebKit } from "@/components/UiWebKit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workflow Sandbox — UX Case Study" },
      {
        name: "description",
        content:
          "A polished placeholder case-study website for Workflow Sandbox following the provided wireframe.",
      },
      { property: "og:title", content: "Workflow Sandbox — UX Case Study" },
      {
        property: "og:description",
        content: "A polished placeholder case-study website for Workflow Sandbox.",
      },
    ],
  }),
  component: UiWebKit,
});
