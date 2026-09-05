import { MOON_PHASES } from "@/data/quiz";
import { cn } from "@/lib/utils";

/** 月相进度指示器：当前题显示对应月相，其余为空心圆点。 */
export function PhaseProgress({ index }: { index: number }) {
  return (
    <div className="flex items-center justify-center gap-3" aria-label="进度">
      {MOON_PHASES.map((phase, i) => {
        const isCurrent = i === index;
        const isPast = i < index;
        return (
          <span
            key={i}
            className={cn(
              "text-base transition-all duration-500",
              isCurrent ? "scale-125 opacity-100" : isPast ? "opacity-60" : "opacity-30",
            )}
          >
            {isCurrent || isPast ? (
              phase
            ) : (
              <span className="inline-block h-2 w-2 rounded-full border border-moon/60 align-middle" />
            )}
          </span>
        );
      })}
    </div>
  );
}
