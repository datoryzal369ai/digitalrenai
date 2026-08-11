export function CoreVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square w-full ${className}`} aria-hidden="true">
      <div className="core-glow absolute inset-0" />
      <svg viewBox="0 0 400 400" className="relative h-full w-full">
        <defs>
          <linearGradient id="drmEdge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--platinum)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="drmCore" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.95" />
            <stop offset="70%" stopColor="var(--primary)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="animate-orbit" style={{ transformOrigin: "200px 200px" }}>
          <polygon
            points="200,40 338,120 338,280 200,360 62,280 62,120"
            fill="none"
            stroke="url(#drmEdge)"
            strokeWidth="1"
            opacity="0.55"
          />
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i - Math.PI / 2;
            return (
              <circle
                key={i}
                cx={200 + Math.cos(a) * 160}
                cy={200 + Math.sin(a) * 160}
                r="3"
                fill="var(--primary)"
              />
            );
          })}
        </g>

        <g
          className="animate-orbit"
          style={{ transformOrigin: "200px 200px", animationDirection: "reverse", animationDuration: "28s" }}
        >
          <polygon
            points="200,80 304,140 304,260 200,320 96,260 96,140"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.8"
            opacity="0.45"
          />
        </g>

        {Array.from({ length: 6 }).map((_, i) => {
          const a = (Math.PI / 3) * i - Math.PI / 2;
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={200 + Math.cos(a) * 160}
              y2={200 + Math.sin(a) * 160}
              stroke="var(--primary)"
              strokeWidth="0.6"
              opacity="0.28"
            />
          );
        })}

        <circle cx="200" cy="200" r="120" fill="url(#drmCore)" className="animate-corepulse" />
        <polygon
          points="200,140 252,170 252,230 200,260 148,230 148,170"
          fill="none"
          stroke="var(--platinum)"
          strokeWidth="1.4"
          opacity="0.85"
        />
        <polygon
          points="200,166 230,183 230,217 200,234 170,217 170,183"
          fill="var(--primary)"
          opacity="0.18"
          stroke="var(--primary)"
          strokeWidth="1"
        />
        <circle cx="200" cy="200" r="6" fill="var(--platinum)" />
      </svg>
    </div>
  );
}
