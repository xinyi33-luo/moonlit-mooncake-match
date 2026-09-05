import { useState } from "react";
import type { Persona } from "@/data/personas";

interface Props {
  persona: Persona;
  onRestart: () => void;
}

export function ResultScreen({ persona, onRestart }: Props) {
  const [copied, setCopied] = useState(false);

  const shareText = `我的中秋人格是${persona.emoji} ${persona.name}（${persona.type}）——${persona.oneLiner}\n你是哪一种月饼？来测测看：`;

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "你的中秋人格，藏在什么月饼里？", text: shareText, url });
        return;
      } catch {
        /* 用户取消分享 */
      }
    }
    try {
      await navigator.clipboard.writeText(`${shareText} ${url}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={`theme-${persona.key} night-sky min-h-dvh`}>
      <div className="mx-auto max-w-[430px] px-5 pt-12 pb-14 animate-fade-up">
        {/* 第一屏：分享卡片 */}
        <section className="glass-card rounded-3xl px-6 py-9 text-center">
          <p className="text-xs tracking-[0.35em] text-muted-foreground">今夜月亮告诉你</p>
          <p className="mt-6 text-sm text-muted-foreground">你是</p>
          <h1 className="text-display mt-2 text-[1.75rem] leading-tight font-semibold text-primary">
            {persona.emoji} {persona.name}
          </h1>
          <p className="mt-3 inline-block rounded-full border border-primary/40 px-4 py-1 text-sm text-accent">
            {persona.type}
          </p>

          <img
            src={persona.image}
            alt={persona.imageAlt}
            width={768}
            height={768}
            className="mx-auto mt-7 w-full max-w-[280px] rounded-2xl shadow-[var(--shadow-soft)]"
          />

          <p className="text-display mt-7 text-base leading-8">{persona.oneLiner}</p>
        </section>

        {/* 月亮这样形容你 */}
        <section className="glass-card mt-5 rounded-3xl px-6 py-7">
          <h2 className="text-display text-base font-medium">🌙 月亮这样形容你</h2>
          <div className="mt-4 space-y-1.5 text-[0.95rem] leading-8 text-foreground/90">
            {persona.story.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </section>

        {/* 关键词 */}
        <section className="glass-card mt-5 rounded-3xl px-6 py-7">
          <h2 className="text-display text-base font-medium">✦ 你的关键词</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {persona.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1.5 text-sm text-accent"
              >
                {k}
              </span>
            ))}
          </div>
        </section>

        {/* 隐藏属性 */}
        <section className="glass-card mt-5 rounded-3xl px-6 py-7">
          <h2 className="text-display text-base font-medium">🌙 月亮偷偷发现</h2>
          <p className="mt-4 text-lg text-primary">「{persona.hidden.title}」</p>
          <p className="mt-2 whitespace-pre-line text-sm leading-7 text-muted-foreground">
            {persona.hidden.desc}
          </p>

          <div className="mt-6 space-y-3">
            {persona.bars.map((bar, i) => (
              <div key={bar.label} className="flex items-center gap-3">
                <span className="w-14 shrink-0 text-xs text-muted-foreground">{bar.label}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/10">
                  <span
                    className="block h-full rounded-full bg-primary/80"
                    style={{
                      width: `${bar.value}%`,
                      animation: `bar-grow 1.1s cubic-bezier(0.22,1,0.36,1) ${0.2 + i * 0.15}s both`,
                    }}
                  />
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[0.7rem] text-muted-foreground/70">
            以上只是月亮的一点小玩笑，图个开心就好。
          </p>
        </section>

        {/* CTA */}
        <div className="mt-8 space-y-3">
          <button
            onClick={handleShare}
            className="w-full rounded-full bg-primary py-4 text-base font-medium text-primary-foreground shadow-[0_0_44px_-12px_var(--color-primary)] transition-transform active:scale-95"
          >
            🌕 测测我的朋友
          </button>
          <button
            onClick={onRestart}
            className="w-full rounded-full border border-border py-3.5 text-sm text-muted-foreground transition-colors active:bg-foreground/5"
          >
            ↻ 再测一次
          </button>
          <p className="h-5 text-center text-xs text-accent">
            {copied ? "已复制，可以分享给朋友" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
