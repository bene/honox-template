import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
      build: {
        rollupOptions: {
          input: ["/app/index.css"],
        },
      },
    };
  }

  return {
    plugins: [honox()],
  };
});
