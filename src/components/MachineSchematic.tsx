import type { Schematic } from "@/lib/site";

/**
 * Line-drawn blueprint of a machine, generated from its schematic type.
 * Every stroke is drawn in by GSAP (data-draw).
 */
export default function MachineSchematic({ schematic, label }: { schematic: Schematic; label: string }) {
  const W = 900;
  const H = 300;
  const n = schematic.chambers ?? 4;
  const s = "stroke-current";

  const body = (() => {
    switch (schematic.kind) {
      case "stenter":
      case "burner": {
        const x0 = 170;
        const cw = (W - x0 - 130) / n;
        return (
          <>
            {/* inlet rollers + padder */}
            <circle cx="60" cy="190" r="16" />
            <circle cx="105" cy="150" r="12" />
            <circle cx="105" cy="178" r="12" />
            {/* chambers */}
            {Array.from({ length: n }).map((_, i) => (
              <g key={i}>
                <rect x={x0 + i * cw} y="70" width={cw - 6} height="170" />
                <line x1={x0 + i * cw + 12} y1="110" x2={x0 + (i + 1) * cw - 18} y2="110" strokeDasharray="4 6" />
                <line x1={x0 + i * cw + 12} y1="200" x2={x0 + (i + 1) * cw - 18} y2="200" strokeDasharray="4 6" />
                {schematic.kind === "burner" && <path d={`M${x0 + i * cw + cw / 2 - 12} 262 q12 -26 24 0`} />}
              </g>
            ))}
            {/* exhaust stacks */}
            <line x1={x0 + cw / 2} y1="70" x2={x0 + cw / 2} y2="30" />
            <line x1={x0 + cw * (n - 1.5)} y1="70" x2={x0 + cw * (n - 1.5)} y2="30" />
            {/* outlet */}
            <circle cx={W - 80} cy="160" r="14" />
            <circle cx={W - 45} cy="210" r="26" />
          </>
        );
      }
      case "mangle":
        return (
          <>
            <path d="M40 250 h120 v-40 h-120 z" />
            <circle cx="120" cy="120" r="24" />
            <circle cx="120" cy="170" r="24" />
            <circle cx="120" cy="70" r="24" />
            {Array.from({ length: n }).map((_, i) => (
              <g key={i}>
                <rect x={240 + i * 180} y="80" width="170" height="150" />
                {[0, 1, 2, 3, 4, 5].map((k) => (
                  <line key={k} x1={255 + i * 180 + k * 26} y1="118" x2={255 + i * 180 + k * 26} y2="138" />
                ))}
                {[0, 1, 2, 3, 4, 5].map((k) => (
                  <line key={`b${k}`} x1={255 + i * 180 + k * 26} y1="172" x2={255 + i * 180 + k * 26} y2="192" />
                ))}
              </g>
            ))}
            <circle cx={W - 60} cy="200" r="24" />
          </>
        );
      case "dryer":
        return (
          <>
            <circle cx="50" cy="200" r="18" />
            {Array.from({ length: n }).map((_, i) => (
              <rect key={i} x={110 + i * ((W - 220) / n)} y="60" width={(W - 220) / n - 6} height="190" />
            ))}
            {[100, 150, 200].map((y) => (
              <path key={y} d={`M110 ${y} h${W - 226}`} strokeDasharray="10 8" />
            ))}
            <path d={`M110 175 ${Array.from({ length: 24 }).map((_, k) => `q${(W - 226) / 48} ${k % 2 ? 10 : -10} ${(W - 226) / 24} 0`).join(" ")}`} />
            <path d={`M${W - 90} 250 l20 -40 l20 40 l20 -40`} />
          </>
        );
      case "cylinders":
        return (
          <>
            {Array.from({ length: n / 2 }).map((_, i) => (
              <g key={i}>
                <circle cx={130 + i * 170} cy="95" r="44" />
                <circle cx={215 + i * 170} cy="205" r="44" />
              </g>
            ))}
            <path d={`M40 205 L86 205 ${Array.from({ length: n / 2 }).map((_, i) => `L${130 + i * 170} 51 L${215 + i * 170} 249`).join(" ")} L${W - 40} 249`} />
            <rect x="80" y="20" width={W - 160} height="270" strokeDasharray="6 8" />
          </>
        );
      case "dyeing":
        return (
          <>
            <path d="M80 140 v100 h220 v-100" />
            <path d="M80 190 h220" strokeDasharray="6 6" />
            <circle cx="140" cy="215" r="16" />
            <circle cx="240" cy="215" r="16" />
            <circle cx="380" cy="110" r="26" />
            <circle cx="380" cy="164" r="26" />
            <path d="M30 100 L140 215 L240 215 L380 136 L520 136" />
            {Array.from({ length: n }).map((_, i) => (
              <circle key={i} cx={580 + i * 100} cy={i % 2 ? 200 : 110} r="40" />
            ))}
          </>
        );
      case "cutter":
        return (
          <>
            <ellipse cx="170" cy="150" rx="80" ry="110" />
            <ellipse cx="170" cy="150" rx="40" ry="110" strokeDasharray="6 6" />
            <path d="M250 60 L560 90 M250 240 L560 210" />
            <circle cx="600" cy="150" r="34" />
            <path d="M600 116 L600 184 M566 150 L634 150" />
            <path d="M640 90 L860 60 M640 210 L860 240" />
            <path d="M600 60 v30 M600 210 v30" strokeDasharray="4 4" />
          </>
        );
      case "drum":
        return (
          <>
            <rect x="200" y="30" width="500" height="250" />
            <circle cx="450" cy="155" r="100" />
            <circle cx="450" cy="155" r="70" strokeDasharray="6 8" />
            <path d="M450 55 v200 M350 155 h200" strokeDasharray="3 6" />
            <path d="M120 80 h80 M120 110 h80 M700 230 h80 M700 200 h80" />
          </>
        );
    }
  })();

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto text-electric-soft"
      fill="none"
      strokeWidth="1.5"
      role="img"
      aria-label={`Schematic of ${label}`}
      data-draw
    >
      <g className={s} stroke="currentColor">
        {body}
        {/* fabric path */}
        {(schematic.kind === "stenter" || schematic.kind === "burner" || schematic.kind === "dryer" || schematic.kind === "mangle") && (
          <path d={`M20 190 L${W - 20} 190`} stroke="#ffffff" strokeWidth="2" />
        )}
      </g>
    </svg>
  );
}
