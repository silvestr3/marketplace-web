import { Header } from "@/components/global/header";
import { Outlet } from "react-router-dom";

export function PrivateLayout() {
  return (
    <div className="flex flex-col items-center bg-base-background h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
