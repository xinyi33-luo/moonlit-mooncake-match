import { useMemo } from "react";

interface Props {
  petals?: number;
  stars?: number;
}

/** 夜空背景：少量星光 + 飘落的桂花，克制、不喧宾夺主。 */
export function NightSky({ petals = 10, stars = 18 }: Props) {
  const starList = useMemo(
    () =>
      Array.from({ length: stars }, (_, i) => ({
        left: (i * 37) % 100,
        top: (i * 53) % 70,
        delay: (i % 7) * 0.9,
        size: i % 3 === 0 ? 2.5 : 1.6,
      })),
    [stars],
  );

  const petalList = useMemo(
    () =>
      Array.from({ length: petals }, (_, i) => ({
        left: (i * 61) % 100,
        delay: (i % 10) * 1.7,
        duration: 13 + (i % 5) * 3,
        drift: (i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 18),
        size: 5 + (i % 3),
      })),
    [petals],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {starList.map((s, i) => (
        <span
          key={`s${i}`}
          className="absolute rounded-full bg-moon"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${4 + (i % 4)}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
      {petalList.map((p, i) => (
        <span
          key={`p${i}`}
          className="absolute top-0 rounded-[60%_40%_60%_40%] bg-osmanthus/70"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.6,
            ["--drift" as string]: `${p.drift}px`,
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
