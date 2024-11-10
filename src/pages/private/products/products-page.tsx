import { FilterSelection } from "./components/filter-selection";
import { ProductCard } from "./components/product-card";

export function ProductsPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="title-md">Seus produtos</h1>
        <h2 className="body-sm text-gray-300">
          Acesse e gerencie a sua lista de produtos à venda
        </h2>
      </div>

      <div className="flex items-start gap-6">
        <FilterSelection />

        <div className="grid grid-cols-2 gap-4 flex-1 h-[calc(100vh-400px)] overflow-y-scroll">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
