import { cn } from "../../lib/utils";

export default function Input({ className, label, error, id, ...props }) {
    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label htmlFor={id} className="text-sm font-semibold text-[var(--cream)]">
                    {label}
                </label>
            )}
            <input
                id={id}
                className={cn(
                    "h-11 w-full rounded-xl border bg-white/[0.05] px-4 text-sm text-[var(--cream)] placeholder:text-white/25 outline-none backdrop-blur-sm transition-all duration-200",
                    "border-white/12 focus:border-[var(--amber)]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[var(--amber)]/15",
                    error && "border-red-400/50 focus:border-red-400 focus:ring-red-400/20",
                    className
                )}
                {...props}
            />
            {error && <span className="text-xs text-amber-400">{error}</span>}
        </div>
    );
}

export function Textarea({ className, label, error, id, ...props }) {
    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label htmlFor={id} className="text-sm font-semibold text-[var(--cream)]">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                className={cn(
                    "w-full rounded-xl border bg-white/[0.05] px-4 py-3 text-sm text-[var(--cream)] placeholder:text-white/25 outline-none backdrop-blur-sm transition-all duration-200 resize-none",
                    "border-white/12 focus:border-[var(--amber)]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[var(--amber)]/15",
                    error && "border-red-400/50 focus:border-red-400 focus:ring-red-400/20",
                    className
                )}
                {...props}
            />
            {error && <span className="text-xs text-amber-400">{error}</span>}
        </div>
    );
}
