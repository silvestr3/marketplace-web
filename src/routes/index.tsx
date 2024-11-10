import { AuthLayout } from "@/pages/_layouts/auth-layout";
import { LoginPage } from "@/pages/auth/login/login-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <h1>Register page</h1>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <h1>Dashboard</h1>,
  },
  {
    path: "/product",
    element: <h1>Product page</h1>,
  },
  {
    path: "/*",
    element: <h1>Page not found</h1>,
  },
]);
