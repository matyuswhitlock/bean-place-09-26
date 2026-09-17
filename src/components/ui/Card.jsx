import { cn } from "../../lib/utils";

export default function Card({ children, className, glass = false, ...props }) {
    return (
        <div
            className={cn(
                "rounded-2xl border transition-all duration-300",
                glass
                    ? "bg-white/[0.05] border-white/[0.10] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] hover:bg-white/[0.08] hover:border-white/[0.15]"
                    : "bg-white/[0.06] border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]",
                className
            )}
            {...props}>
            {children}
        </div>
    );
}

export function CardHeader({ children, className, ...props }) {
    return (
        <div className={cn("px-6 pt-6 pb-2", className)} {...props}>
            {children}
        </div>
    );
}

export function CardContent({ children, className, ...props }) {
    return (
        <div className={cn("px-6 pb-6", className)} {...props}>
            {children}
        </div>
    );
}
