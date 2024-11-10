import { Card } from "@/components/ui/card";
import sampleProductImage from "@/assets/image.png";
import { StatusLabel } from "./status-label";

export function ProductCard() {
  return (
    <Card className=" p-1 rounded-[30px] flex flex-col gap-3">
      <div className="relative">
        <StatusLabel status="announced" />
        <img src={sampleProductImage} className="" />
      </div>
      <div className="flex flex-col items-center gap-2 px-3 py-4">
        <div className="flex items-center w-full justify-between">
          <h4 className="text-gray-400 subtitle">Sofá</h4>
          <span className="font-dmsans font-bold text-[18px] text-gray-500">
            <strong className="label-md">R$</strong>
            1.200,90
          </span>
        </div>
        <p className="body-sm text-gray-300">
          Sofá revestido em couro legítimo, com estrutura em madeira maciça e
          pés em metal cromado.
        </p>
      </div>
    </Card>
  );
}
