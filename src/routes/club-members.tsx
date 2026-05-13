import { createFileRoute } from "@tanstack/react-router";
import { LoginScreen } from "@/components/LoginScreen";

export const Route = createFileRoute("/club-members")({
  head: () => ({
    meta: [
      { title: "Club Members Login — Matwa Group" },
      { name: "description", content: "Club members login portal." },
    ],
  }),
  component: () => <LoginScreen title="Log In" />,
});
