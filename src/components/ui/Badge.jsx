import { cn } from "../../lib/utils";

const variants = {
    default: "bg-white/8 text-[var(--cream)] border border-white/12 backdrop-blur-sm",
    accent: "bg-[var(--amber)]/10 text-[var(--amber-light)] border border-[var(--amber)]/20",
    outline: "bg-[var(--brown-700)]/8 text-[var(--brown-600)] border border-[var(--brown-600)]/25"
};

export default function Badge({ children, variant = "default", className, ...props }) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
                variants[variant],
                className
            )}
            {...props}>
            {children}
        </span>
    );
}
