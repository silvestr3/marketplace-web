import { AuthLayout } from "@/pages/_layouts/auth-layout";
import { PrivateLayout } from "@/pages/_layouts/private-layout";
import { LoginPage } from "@/pages/auth/login/login-page";
import { RegisterPage } from "@/pages/auth/register/register-page";
import { DashboardPage } from "@/pages/private/dashboard/dashboard-page";
import { ProductsPage } from "@/pages/private/products/products-page";
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
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "product",
        element: <ProductsPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>Page not found</h1>,
  },
]);
