import { useEffect, useState } from "react";
import { Moon } from "./Moon";

/** Q5 之后的揭晓过渡：约 2.6 秒。 */
export function RevealScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = window.setTimeout(() => setStep(1), 1300);
    const t2 = window.setTimeout(onDone, 2700);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-10 px-8 text-center">
      <Moon size={step === 0 ? 130 : 180} brightness={step === 0 ? 0.55 : 1} />
      <p key={step} className="text-display text-base leading-8 animate-soft-in">
        {step === 0 ? "月亮已经记住你的答案。" : "它找到了一块最像你的月饼……"}
      </p>
    </div>
  );
}
