import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pageNotFound.jsx";
import About from "./about.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/About", element: <About /> },
  { path: "*", element: <PageNotFound /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
