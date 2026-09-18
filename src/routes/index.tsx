import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <iframe title="Imago AI" src="/editor.html" style={{ border: 0, width: "100vw", height: "100vh", display: "block" }} />;
}
