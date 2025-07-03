import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthProvider from "./Context/Auth/AuthProvider.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
AOS.init();
const queryClient = new QueryClient();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="font-urbanist">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </QueryClientProvider>
  </StrictMode>
);
