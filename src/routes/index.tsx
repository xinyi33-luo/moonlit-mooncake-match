import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { QUESTIONS, type QuestionId } from "@/data/quiz";
import { PERSONAS } from "@/data/personas";
import { resolveResult, type Answers } from "@/lib/scoring";
import { NightSky } from "@/components/game/NightSky";
import { HomeScreen } from "@/components/game/HomeScreen";
import { QuestionScreen } from "@/components/game/QuestionScreen";
import { RevealScreen } from "@/components/game/RevealScreen";
import { ResultScreen } from "@/components/game/ResultScreen";

const TITLE = "你的中秋人格，藏在什么月饼里？｜中秋月夜小游戏";
const DESC = "5 道题、约 30 秒，凭直觉选，月亮替你揭晓你是哪一种月饼人格。中秋月夜风格的轻互动小游戏。";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Stage = "home" | "quiz" | "reveal" | "result";

function Index() {
  const [stage, setStage] = useState<Stage>("home");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const handleSelect = (qid: QuestionId, optionKey: string) => {
    const next = { ...answers, [qid]: optionKey };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setStage("reveal");
    }
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setStage("home");
  };

  const handleRevealDone = useCallback(() => setStage("result"), []);

  const question = QUESTIONS[step]!;

  if (stage === "result") {
    return <ResultScreen persona={PERSONAS[resolveResult(answers)]} onRestart={restart} />;
  }

  return (
    <main className="night-sky relative min-h-dvh overflow-hidden">
      <NightSky petals={stage === "home" ? 12 : 6} stars={stage === "home" ? 20 : 12} />
      <div className="relative mx-auto max-w-[430px]">
        {stage === "home" && <HomeScreen onStart={() => setStage("quiz")} />}
        {stage === "quiz" && (
          <QuestionScreen
            key={question.id}
            question={question}
            index={step}
            onSelect={(key) => handleSelect(question.id, key)}
          />
        )}
        {stage === "reveal" && <RevealScreen onDone={handleRevealDone} />}
      </div>
    </main>
  );
}
