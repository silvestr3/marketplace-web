import { cn } from "@/lib/utils";

interface StatusLabelProps {
  status: "announced" | "sold" | "inactive";
}

export function StatusLabel({ status }: StatusLabelProps) {
  const statusMap = {
    announced: {
      class: "bg-blue-dark",
      text: "Anunciado",
    },
    sold: {
      class: "bg-success",
      text: "Vendido",
    },
    inactive: {
      class: "bg-gray-300",
      text: "Desativado",
    },
  };

  return (
    <span
      className={cn(
        statusMap[status].class,
        "rounded-xl text-base-white label-sm absolute right-4 top-4 p-1"
      )}
    >
      {statusMap[status].text}
    </span>
  );
}
