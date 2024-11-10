import { SoldProductsCard } from "./components/sold-products-card";
import { AnnouncedProductsCard } from "./components/announced-products-card";
import { UsersVisitedCard } from "./components/users-visited-card";
import { VisitorsChart } from "./components/visitors-chart";

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="title-md">Últimos 30 dias</h1>
        <h2 className="body-sm text-gray-300">
          Confira as estatísticas da sua loja no último mês
        </h2>
      </div>

      <div className="flex items-center gap-6 flex-1">
        <div className="flex flex-col gap-4 w-60">
          <SoldProductsCard />
          <AnnouncedProductsCard />
          <UsersVisitedCard />
        </div>

        <VisitorsChart />
      </div>
    </div>
  );
}
