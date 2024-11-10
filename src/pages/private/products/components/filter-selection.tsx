import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SaleTag02Icon, Search01Icon } from "hugeicons-react";
import { useState } from "react";

export function FilterSelection() {
  const statusMap = {
    announced: "Anunciado",
    sold: "Vendido",
    cancelled: "Cancelado",
  } as const;

  const [status, setStatus] = useState<keyof typeof statusMap | "">("");

  return (
    <div className="bg-base-white w-[327px] h-[306px] rounded-lg p-6 flex flex-col gap-6">
      <h3 className="title-sm text-gray-300">Filtrar</h3>

      <div className="group">
        <div className="relative">
          <Search01Icon className="absolute bottom-2 text-gray-300 group-focus-within:text-orange-base" />
          <Input
            id="search"
            type="text"
            placeholder="Pesquisar"
            className="pl-9 body-md placeholder:body-md"
          />
        </div>
      </div>

      <div className="group">
        <DropdownMenu>
          <DropdownMenuTrigger className="relative body-md capitalize placeholder:body-md text-gray-300 flex items-center gap-2.5 w-full border-b border-opacity-40 pb-2">
            <SaleTag02Icon className="text-gray-300 group-focus-within:text-orange-base" />
            {status === "" ? "Status" : statusMap[status]}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-base-white body-sm text-gray-300"
            align="start"
          >
            <DropdownMenuRadioGroup
              value={status}
              // @ts-expect-error
              onValueChange={setStatus}
            >
              <DropdownMenuRadioItem
                className={
                  status === "announced" ? "text-orange-base" : "text-gray-300"
                }
                value="announced"
              >
                Anunciado
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                className={
                  status === "sold" ? "text-orange-base" : "text-gray-300"
                }
                value="sold"
              >
                Vendido
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                className={
                  status === "cancelled" ? "text-orange-base" : "text-gray-300"
                }
                value="cancelled"
              >
                Cancelado
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Button className="mt-auto">Aplicar filtro</Button>
    </div>
  );
}
