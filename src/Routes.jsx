import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApartmentPage from "./Pages/Apartment.jsx";
import AboutPage from "./Pages/About.jsx";
import HomePage from "./Pages/Home.jsx";
import ErrorPage from "./Pages/Error.jsx";
// Create React router
function Routes() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/logement/:id", element: <ApartmentPage /> },
    { path: "*", element: <ErrorPage /> },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default Routes;
