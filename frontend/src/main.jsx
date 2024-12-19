import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyRoutes from "./MyRoutes.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <MyRoutes />
    </UserContextProvider>
  </StrictMode>
);
