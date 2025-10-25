import { Button } from "@/components/ui/button";
import type { HeaderActionsProps } from "./header.types";

export function HeaderActions({}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-4 ml-6">
      <Button
        variant="ghost"
        className="text-gray-700 hover:text-blue-600 text-sm"
      >
        Log in
      </Button>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2">
        Free Trial
      </Button>
    </div>
  );
}
