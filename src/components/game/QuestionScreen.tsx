import { useState } from "react";
import type { Question } from "@/data/quiz";
import { PhaseProgress } from "./PhaseProgress";
import { cn } from "@/lib/utils";

interface Props {
  question: Question;
  index: number;
  onSelect: (optionKey: string) => void;
}

export function QuestionScreen({ question, index, onSelect }: Props) {
  const [picked, setPicked] = useState<string | null>(null);

  const handlePick = (key: string) => {
    if (picked) return;
    setPicked(key);
    window.setTimeout(() => onSelect(key), 480);
  };

  return (
    <div
      key={question.id}
      className="flex min-h-dvh flex-col px-5 pt-10 pb-12 animate-fade-up sm:px-6"
    >
      <p className="text-center text-xs tracking-[0.3em] text-muted-foreground">今夜的月亮正在听</p>
      <div className="mt-5">
        <PhaseProgress index={index} />
      </div>

      <div className="mt-12 mb-8 text-center">
        <h2 className="text-display text-xl leading-[1.75] font-medium sm:text-2xl">
          {question.title}
        </h2>
        {question.subtitle && (
          <p className="mt-3 text-sm text-muted-foreground">{question.subtitle}</p>
        )}
      </div>

      <div
        className={cn(
          "mt-auto grid gap-3",
          question.layout === "grid" ? "grid-cols-2" : "grid-cols-1",
        )}
      >
        {question.options.map((opt, i) => {
          const isPicked = picked === opt.key;
          const dimmed = picked !== null && !isPicked;
          return (
            <button
              key={opt.key}
              onClick={() => handlePick(opt.key)}
              style={{ animationDelay: `${0.06 * i}s` }}
              className={cn(
                "glass-card animate-fade-up rounded-2xl px-4 py-4 text-left transition-all duration-300 active:scale-[0.97]",
                question.layout === "grid" ? "min-h-[112px]" : "min-h-[64px]",
                isPicked &&
                  "scale-[1.02] border-primary/70 bg-primary/15 shadow-[0_0_36px_-8px_var(--color-primary)]",
                dimmed && "opacity-35",
              )}
            >
              <span className="flex items-start gap-2.5">
                {opt.emoji && <span className="text-lg leading-6">{opt.emoji}</span>}
                <span className="text-[0.95rem] leading-7">{opt.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
