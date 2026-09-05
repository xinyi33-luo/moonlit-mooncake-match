// 题目与计分数据。分数数组顺序固定为 [G, L, E, W, R, I]。

export type PersonaKey = "G" | "L" | "E" | "W" | "R" | "I";
export const PERSONA_ORDER: PersonaKey[] = ["G", "L", "E", "W", "R", "I"];

export type QuestionId = "Q1" | "Q2" | "Q3" | "Q4" | "Q5";

export interface Option {
  key: string;
  emoji?: string;
  label: string;
  scores: number[];
}

export interface Question {
  id: QuestionId;
  title: string;
  subtitle?: string;
  layout: "list" | "grid";
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    id: "Q1",
    title: "如果今晚突然不用安排任何事情，你最想怎么过？",
    layout: "list",
    options: [
      { key: "A", emoji: "🏮", label: "出门走走，看看街上的灯和人", scores: [2, 2, 0, 2, 0, 1] },
      { key: "B", emoji: "🌿", label: "找个安静的地方，一个人慢慢待着", scores: [3, 1, 1, 1, 3, 0] },
      { key: "C", emoji: "🛋️", label: "回家买点喜欢吃的，舒舒服服窝着", scores: [1, 1, 2, 0, 3, 0] },
      { key: "D", emoji: "🚶", label: "随便走走，走到哪算哪", scores: [1, 2, 0, 3, 1, 3] },
    ],
  },
  {
    id: "Q2",
    title: "你抬头发现，今晚的月亮比平时大、亮、好看很多。",
    subtitle: "你的第一反应是？",
    layout: "grid",
    options: [
      {
        key: "A",
        emoji: "📷",
        label: "赶紧拍下来，发给一个我觉得 TA 一定会喜欢的人",
        scores: [3, 3, 0, 1, 1, 0],
      },
      {
        key: "B",
        emoji: "🌙",
        label: "什么也不做，就这样看一会儿，觉得这一刻本身就很好",
        scores: [3, 1, 1, 1, 3, 0],
      },
      {
        key: "C",
        emoji: "🏮",
        label: "突然想出门走走，看看今晚的城市是什么样子",
        scores: [1, 2, 1, 3, 0, 3],
      },
      {
        key: "D",
        emoji: "💭",
        label: "突然想起最近一直想做的一件事，开始认真琢磨起来",
        scores: [0, 2, 3, 2, 0, 2],
      },
      { key: "E", emoji: "🥂", label: "找个人一起看吧，一个人看好像有点可惜", scores: [3, 3, 1, 1, 2, 0] },
      {
        key: "F",
        emoji: "🔭",
        label: "“今天的月亮怎么这么不一样？”忍不住开始观察它",
        scores: [1, 1, 1, 3, 0, 3],
      },
    ],
  },
  {
    id: "Q3",
    title: "如果今晚的月亮可以送你一份礼物，你最想收到什么？",
    layout: "list",
    options: [
      { key: "A", emoji: "💌", label: "一句话——来自某个很重要的人", scores: [3, 3, 0, 1, 1, 0] },
      { key: "B", emoji: "✨", label: "一个愿望实现的机会", scores: [1, 2, 3, 2, 0, 2] },
      { key: "C", emoji: "🏠", label: "身边的人都平平安安", scores: [2, 1, 3, 0, 3, 0] },
      { key: "D", emoji: "🎟️", label: "一张去陌生地方的车票", scores: [1, 2, 0, 3, 0, 3] },
    ],
  },
  {
    id: "Q4",
    title: "中秋假期的最后一天，你突然发现明天也不用上班/上课。",
    subtitle: "多出来的一天，你会怎么用？",
    layout: "list",
    options: [
      { key: "A", emoji: "💤", label: "什么都不安排，睡到自然醒再说", scores: [1, 0, 1, 1, 4, 0] },
      { key: "B", emoji: "🧳", label: "临时决定去一个没去过的地方", scores: [0, 2, 0, 3, 0, 4] },
      { key: "C", emoji: "🍲", label: "约几个熟悉的人，好好吃一顿饭", scores: [3, 3, 2, 1, 2, 0] },
      { key: "D", emoji: "🎧", label: "一个人做自己最近一直想做的事情", scores: [1, 2, 3, 2, 0, 2] },
    ],
  },
  {
    id: "Q5",
    title: "如果今晚的月亮只能替你留下一句话，你最希望它说什么？",
    layout: "list",
    options: [
      { key: "A", label: "“你已经做得很好了。”", scores: [2, 1, 3, 1, 3, 0] },
      { key: "B", label: "“别害怕，去做你想做的事。”", scores: [0, 2, 3, 2, 0, 4] },
      { key: "C", label: "“你想见的人，也正在想你。”", scores: [4, 3, 1, 1, 2, 0] },
      { key: "D", label: "“慢一点，也没关系。”", scores: [2, 0, 1, 1, 4, 0] },
    ],
  },
];

export const TIE_BREAK_PRIORITY: QuestionId[] = ["Q5", "Q4", "Q2", "Q3", "Q1"];

export const MOON_PHASES = ["🌑", "🌒", "🌓", "🌔", "🌕"];
