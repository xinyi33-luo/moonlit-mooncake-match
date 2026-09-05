import type { PersonaKey } from "./quiz";
import imgG from "@/assets/mooncake-g.jpg";
import imgL from "@/assets/mooncake-l.jpg";
import imgE from "@/assets/mooncake-e.jpg";
import imgW from "@/assets/mooncake-w.jpg";
import imgR from "@/assets/mooncake-r.jpg";
import imgI from "@/assets/mooncake-i.jpg";

export interface Persona {
  key: PersonaKey;
  emoji: string;
  name: string;
  type: string;
  keywords: string[];
  oneLiner: string;
  story: string[];
  hidden: { title: string; desc: string };
  bars: { label: string; value: number }[];
  image: string;
  imageAlt: string;
}

export const PERSONAS: Record<PersonaKey, Persona> = {
  G: {
    key: "G",
    emoji: "🌸",
    name: "桂花莲蓉月饼",
    type: "温柔感知型",
    keywords: ["细腻", "温柔", "慢热", "仪式感", "高感受力"],
    oneLiner: "你总能发现别人注意不到的小美好。",
    story: [
      "你喜欢的幸福，往往没有那么轰轰烈烈。",
      "是月亮刚好升起来的时候，",
      "是桂花落在肩头的时候，",
      "是有人记得你随口说过的小事。",
      "你相信，值得被记住的，",
      "往往就是这些很小很小的瞬间。",
    ],
    hidden: { title: "细节收藏家", desc: "你会默默记住很多别人已经忘记的小事。" },
    bars: [
      { label: "感受力", value: 92 },
      { label: "仪式感", value: 84 },
      { label: "温柔", value: 95 },
    ],
    image: imgG,
    imageAlt: "月光下的桂花莲蓉月饼",
  },
  L: {
    key: "L",
    emoji: "✨",
    name: "流心奶黄月饼",
    type: "热烈反差型",
    keywords: ["热烈", "感性", "真诚", "反差", "有感染力"],
    oneLiner: "表面云淡风轻，心里其实一直在发光。",
    story: [
      "你可能不太擅长把所有情绪说出来，",
      "但喜欢就是喜欢，在意就是在意。",
      "你有一种很可爱的反差：",
      "看起来云淡风轻，",
      "心里其实热烈得像流心一样。",
      "所以遇见真正喜欢的东西，",
      "就大胆地喜欢吧。",
    ],
    hidden: { title: "反差萌", desc: "表面：没什么。\n内心：啊啊啊啊啊啊啊啊啊啊！" },
    bars: [
      { label: "热度", value: 94 },
      { label: "真诚", value: 90 },
      { label: "反差", value: 88 },
    ],
    image: imgL,
    imageAlt: "掰开流出金黄流心的奶黄月饼",
  },
  E: {
    key: "E",
    emoji: "🥚",
    name: "蛋黄莲蓉月饼",
    type: "稳定可靠型",
    keywords: ["坚定", "稳定", "可靠", "有主见", "有原则"],
    oneLiner: "你不一定说得最多，但总是让人觉得可靠。",
    story: [
      "你喜欢确定的东西。",
      "确定的人，确定的目标，",
      "以及自己真正想走的路。",
      "你不需要一直向别人证明自己。",
      "因为你知道，自己正在往哪里走。",
    ],
    hidden: { title: "定海神针", desc: "越是重要的时候，越稳得住。" },
    bars: [
      { label: "稳定", value: 95 },
      { label: "主见", value: 88 },
      { label: "可靠", value: 93 },
    ],
    image: imgE,
    imageAlt: "切开露出金黄蛋黄的莲蓉月饼",
  },
  W: {
    key: "W",
    emoji: "🥜",
    name: "五仁月饼",
    type: "多面有趣型",
    keywords: ["多面", "有趣", "反差", "随性", "好奇"],
    oneLiner: "你不是一个标签能装下的人。",
    story: [
      "安静的时候，你可以一个人待很久。",
      "热闹起来的时候，也可以玩到最后一个离场。",
      "你喜欢认真，也喜欢突然摆烂；",
      "可以很理性，也可以因为一件小事开心很久。",
      "所以为什么一定要给你一个标签？",
      "毕竟五仁里面，",
      "本来就不止一种东西。",
    ],
    hidden: {
      title: "成分复杂",
      desc: "核桃 + 花生 + 瓜子 + 芝麻 + ……以及一个很难被定义的你。",
    },
    bars: [
      { label: "好奇", value: 90 },
      { label: "随性", value: 86 },
      { label: "有趣", value: 94 },
    ],
    image: imgW,
    imageAlt: "散开成星点的五仁月饼",
  },
  R: {
    key: "R",
    emoji: "🫘",
    name: "红豆沙月饼",
    type: "松弛治愈型",
    keywords: ["松弛", "温暖", "治愈", "知足", "享受当下"],
    oneLiner: "比起轰轰烈烈，你更懂得把日子过好。",
    story: [
      "你喜欢的幸福，往往很简单。",
      "一顿好吃的饭，",
      "一部喜欢的电影，",
      "一个不用早起的早晨，",
      "还有一轮刚好看见的月亮。",
      "你不需要每一天都发生什么大事。",
      "平平淡淡的日子，",
      "也值得被好好享受。",
    ],
    hidden: { title: "松弛感", desc: "不把每一个普通的日子，都过成一场必须完成的任务。" },
    bars: [
      { label: "松弛", value: 95 },
      { label: "温暖", value: 90 },
      { label: "知足", value: 88 },
    ],
    image: imgR,
    imageAlt: "窗边木桌上的红豆沙月饼与热茶",
  },
  I: {
    key: "I",
    emoji: "🧊",
    name: "冰皮月饼",
    type: "自由探索型",
    keywords: ["自由", "新鲜", "独立", "好奇", "玩心"],
    oneLiner: "不走寻常路，是你最舒服的节奏。",
    story: [
      "你不太喜欢“大家都应该怎样”。",
      "你更愿意自己试试看。",
      "今天认真工作，",
      "明天突然去看一场日落；",
      "可以传统，",
      "也可以完全不按套路来。",
      "生活没有标准答案，",
      "好玩就已经是很好的理由。",
    ],
    hidden: { title: "好奇心", desc: "看见“禁止进入”的门，第一反应可能是：“里面有什么？”" },
    bars: [
      { label: "自由", value: 95 },
      { label: "玩心", value: 89 },
      { label: "独立", value: 91 },
    ],
    image: imgI,
    imageAlt: "月光穿透的半透明冰皮月饼",
  },
};
