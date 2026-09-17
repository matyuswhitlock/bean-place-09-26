import { cn } from "../../lib/utils";

const variants = {
    primary:
        "bg-[var(--brown-700)] text-[var(--cream)] border-2 border-[var(--brown-700)] shadow-[0_4px_16px_rgba(74,55,44,0.3)] hover:bg-[var(--brown-600)] hover:shadow-[0_8px_24px_rgba(74,55,44,0.35)] hover:translate-y-[-2px]",
    dark: "bg-[var(--brown-800)]/80 text-[var(--cream)] border-2 border-white/20 backdrop-blur-sm hover:bg-[var(--brown-700)] hover:translate-y-[-2px]",
    ghost: "bg-transparent text-[var(--cream)] border-2 border-white/35 hover:bg-white/10 hover:border-white/50 hover:translate-y-[-2px]",
    accent: "bg-gradient-to-r from-[var(--amber-dark)] to-[var(--amber)] text-[var(--brown-900)] border-0 shadow-[0_4px_20px_rgba(212,146,42,0.35)] hover:shadow-[0_8px_28px_rgba(212,146,42,0.5)] hover:translate-y-[-2px] font-bold",
    outline:
        "bg-transparent text-[var(--brown-700)] border-2 border-[var(--brown-600)]/45 hover:bg-[var(--brown-700)]/8 hover:border-[var(--brown-600)]/70 hover:translate-y-[-2px]"
};

const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base"
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    ...props
}) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 ease-out active:scale-[0.97] cursor-pointer select-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}>
            {children}
        </button>
    );
}
