import {
  PERSONA_ORDER,
  QUESTIONS,
  TIE_BREAK_PRIORITY,
  type PersonaKey,
  type QuestionId,
} from "@/data/quiz";

export type Answers = Partial<Record<QuestionId, string>>;

function optionScores(qid: QuestionId, optionKey: string): number[] | null {
  const q = QUESTIONS.find((item) => item.id === qid);
  const opt = q?.options.find((o) => o.key === optionKey);
  return opt ? opt.scores : null;
}

export function computeScores(answers: Answers): Record<PersonaKey, number> {
  const totals = Object.fromEntries(PERSONA_ORDER.map((k) => [k, 0])) as Record<PersonaKey, number>;
  (Object.keys(answers) as QuestionId[]).forEach((qid) => {
    const scores = optionScores(qid, answers[qid]!);
    if (!scores) return;
    PERSONA_ORDER.forEach((key, i) => {
      totals[key] += scores[i] ?? 0;
    });
  });
  return totals;
}

/** 总分最高者胜出；并列时按 Q5 > Q4 > Q2 > Q3 > Q1 的单题得分比较，不使用随机。 */
export function resolveResult(answers: Answers): PersonaKey {
  const totals = computeScores(answers);
  let candidates = [...PERSONA_ORDER];
  const max = Math.max(...candidates.map((k) => totals[k]));
  candidates = candidates.filter((k) => totals[k] === max);

  for (const qid of TIE_BREAK_PRIORITY) {
    if (candidates.length === 1) break;
    const answer = answers[qid];
    if (!answer) continue;
    const scores = optionScores(qid, answer);
    if (!scores) continue;
    const best = Math.max(...candidates.map((k) => scores[PERSONA_ORDER.indexOf(k)] ?? 0));
    candidates = candidates.filter((k) => (scores[PERSONA_ORDER.indexOf(k)] ?? 0) === best);
  }

  return candidates[0] ?? "G";
}
