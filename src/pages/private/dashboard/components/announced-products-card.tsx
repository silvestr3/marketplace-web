import { Store04Icon } from "hugeicons-react";

export function AnnouncedProductsCard() {
  return (
    <div className="bg-base-white rounded-xl h-28 flex items-center gap-4 p-3">
      <div className="rounded-lg bg-blue-light h-full w-20 flex items-center justify-center">
        <Store04Icon className="text-blue-dark" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="title-lg text-gray-400">56</h3>
        <span className="body-xs text-gray-300">Produtos anunciados</span>
      </div>
    </div>
  );
}
