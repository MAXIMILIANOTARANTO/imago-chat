import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <iframe
      title="Imago AI"
      src="/editor.html"
      style={{
        width: "100vw",
        height: "100vh",
        border: 0,
        display: "block",
        background: "#0b0d12",
      }}
    />
  );
}
