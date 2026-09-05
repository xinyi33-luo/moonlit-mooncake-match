import { cn } from "@/lib/utils";

interface Props {
  size?: number;
  className?: string;
  brightness?: number;
}

/** 柔和满月，纯 CSS 绘制。 */
export function Moon({ size = 220, className, brightness = 1 }: Props) {
  return (
    <div
      className={cn("relative animate-breathe", className)}
      style={{ width: size, height: size, opacity: brightness }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 38% 34%, oklch(0.99 0.015 95) 0%, oklch(0.94 0.025 92) 55%, oklch(0.86 0.04 88) 100%)",
          boxShadow:
            "0 0 70px 18px color-mix(in oklab, var(--color-moon) 22%, transparent), 0 0 160px 60px color-mix(in oklab, var(--color-moon) 10%, transparent)",
        }}
      />
      <div
        className="absolute inset-0 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle at 66% 62%, oklch(0.7 0.03 90) 0%, transparent 26%), radial-gradient(circle at 34% 66%, oklch(0.72 0.03 90) 0%, transparent 18%), radial-gradient(circle at 58% 30%, oklch(0.74 0.02 90) 0%, transparent 14%)",
        }}
      />
    </div>
  );
}
