import { createFileRoute } from "@tanstack/react-router";
import { LoginScreen } from "@/components/LoginScreen";

export const Route = createFileRoute("/founders")({
  head: () => ({
    meta: [
      { title: "Founders Login — Matwa Group" },
      { name: "description", content: "Founders login portal." },
    ],
  }),
  component: () => <LoginScreen title="Log In" />,
});
