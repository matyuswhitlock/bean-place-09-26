import { cn } from "../../lib/utils";

export default function Separator({ className, ...props }) {
  return (
    <div
      className={cn("h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent", className)}
      role="separator"
      {...props}
    />
  );
}
