import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-12">
      <Loader2 className="text-muted-foreground h-10 w-10 animate-spin" />
      <span className="ml-3 text-lg">Loading dashboard...</span>
    </div>
  );
}
