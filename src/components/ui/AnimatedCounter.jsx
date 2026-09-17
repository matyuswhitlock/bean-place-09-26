import { useRef } from "react";
import { useInView, useSpring, useTransform, motion } from "framer-motion";

export default function AnimatedCounter({ target, duration = 2, suffix = "", prefix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const springVal = useSpring(0, { duration: duration * 1000 });
    const display = useTransform(springVal, (v) => `${prefix}${Math.round(v)}${suffix}`);

    if (isInView) {
        springVal.set(target);
    }

    return <motion.span ref={ref}>{display}</motion.span>;
}
