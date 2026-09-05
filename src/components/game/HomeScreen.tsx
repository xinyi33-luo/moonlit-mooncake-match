import { Moon } from "./Moon";

export function HomeScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 py-12 text-center">
      <div className="animate-moon-rise">
        <Moon size={200} />
      </div>

      <h1
        className="text-display mt-12 text-[1.75rem] leading-[1.6] font-medium animate-fade-up sm:text-3xl"
        style={{ animationDelay: "0.5s" }}
      >
        你的中秋人格，
        <br />
        藏在什么月饼里？
      </h1>

      <p
        className="mt-5 text-sm leading-7 text-muted-foreground animate-fade-up"
        style={{ animationDelay: "0.9s" }}
      >
        凭感觉选，别想太久。
        <br />
        月亮会替你揭晓答案。
      </p>

      <p
        className="mt-3 text-xs tracking-widest text-muted-foreground/70 animate-fade-up"
        style={{ animationDelay: "1.1s" }}
      >
        5 道题 · 约 30 秒
      </p>

      <button
        onClick={onStart}
        className="mt-11 rounded-full bg-primary px-9 py-3.5 text-base font-medium text-primary-foreground shadow-[0_0_40px_-10px_var(--color-primary)] transition-transform duration-300 animate-fade-up active:scale-95"
        style={{ animationDelay: "1.35s" }}
      >
        开始测试 →
      </button>
    </div>
  );
}
