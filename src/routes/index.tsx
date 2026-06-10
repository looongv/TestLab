import { createFileRoute } from "@tanstack/react-router";
import { UiWebKit } from "@/components/UiWebKit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TaskLab" },
      {
        name: "description",
        content:
          "A CSE 440 Project.",
      },
      { property: "og:title", content: "A CSE 440 Project" },
      {
        property: "og:description",
        content: "A CSE 440 Project",
      },
    ],
  }),
  component: UiWebKit,
});
