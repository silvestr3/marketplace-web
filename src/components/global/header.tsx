import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.svg";
import { ChartHistogramIcon, PackageIcon, PlusSignIcon } from "hugeicons-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function Header() {
  const location = useLocation();

  function isCurrentLocation(page: string) {
    return location.pathname === page;
  }

  return (
    <header className="flex items-center justify-between border-b border-base-shape h-20 w-full p-5 relative">
      <Link to={"/"}>
        <img src={logoIcon} />
      </Link>

      <div className="flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 py-3 px-4 rounded-lg",
            isCurrentLocation("/")
              ? "bg-base-shape text-orange-base"
              : "bg-transparent text-gray-300"
          )}
        >
          <ChartHistogramIcon />
          <span className="action-sm">Dashboard</span>
        </Link>
        <Link
          to="/product"
          className={cn(
            "flex items-center gap-2 py-3 px-4 rounded-lg",
            isCurrentLocation("/product")
              ? "bg-base-shape text-orange-base"
              : "bg-transparent text-gray-300"
          )}
        >
          <PackageIcon />
          <span className="action-sm">Produtos</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button className="flex items-center gap-2 rounded-xl" size="default">
          <PlusSignIcon />
          <span className="action-sm">Novo produto</span>
        </Button>

        <div className="h-12 w-12">
          <img src="https://github.com/silvestr3.png" className="rounded-xl" />
        </div>
      </div>
    </header>
  );
}
