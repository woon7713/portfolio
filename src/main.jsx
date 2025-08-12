import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";

import "@radix-ui/themes/styles.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme
      accentColor="blue"
      grayColor="slate"
      radius="medium"
      scaling="100%"
      appearance="light"
    >
      <App />
    </Theme>
  </StrictMode>
);
