import { Outlet } from "react-router-dom";
import bgImage from "@/assets/login-bg.png";
import logo from "@/assets/logo.svg";

export function AuthLayout() {
  return (
    <main className="w-full h-screen bg-base-background flex items-center gap-6 p-6">
      <div className="flex-1 flex flex-col">
        <img src={logo} className="w-[267px] mt-4" alt="Marketplace logo" />
        <img
          src={bgImage}
          alt="Image of a box with description of some of marketplace's functionality"
        />
      </div>
      <div className="w-[563px] h-full bg-base-white rounded-3xl py-16 px-20 flex flex-col gap-12">
        <Outlet />
      </div>
    </main>
  );
}
