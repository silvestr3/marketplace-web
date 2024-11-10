import { UserMultipleIcon } from "hugeicons-react";

export function UsersVisitedCard() {
  return (
    <div className="bg-base-white rounded-xl h-28 flex items-center gap-4 p-3">
      <div className="rounded-lg bg-blue-light h-full w-20 flex items-center justify-center">
        <UserMultipleIcon className="text-blue-dark" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="title-lg text-gray-400">1.238</h3>
        <span className="body-xs text-gray-300">Pessoas visitantes</span>
      </div>
    </div>
  );
}
