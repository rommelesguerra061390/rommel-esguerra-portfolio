import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  r: number;
  phase: number;
  ai: boolean;
  glow: number;
};

type Path = {
  a: number;
  b: number;
  ai: boolean;
};

type Packet = {
  path: number;
  t: number;
  speed: number;
};

const GOLD = "245, 185, 30";
const CYAN = "34, 211, 238";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let paths: Path[] = [];
    let packets: Packet[] = [];
    let raf = 0;
    let start = performance.now();

    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;
      const count = isMobile ? 16 : isTablet ? 24 : 38;

      nodes = [];
      const cols = Math.ceil(Math.sqrt(count * (width / Math.max(height, 1))));
      const rows = Math.ceil(count / Math.max(cols, 1));
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (nodes.length >= count) break;
          const cellW = width / cols;
          const cellH = height / rows;
          nodes.push({
            x: cellW * (c + 0.5) + (Math.random() - 0.5) * cellW * 0.6,
            y: cellH * (r + 0.5) + (Math.random() - 0.5) * cellH * 0.6,
            r: Math.random() * 1.2 + 1.1,
            phase: Math.random() * Math.PI * 2,
            ai: Math.random() < 0.3,
            glow: 0,
          });
        }
      }

      // connect each node to nearest neighbours with circuit-ish links
      paths = [];
      const maxDist = Math.max(width, height) * (isMobile ? 0.32 : 0.24);
      for (let i = 0; i < nodes.length; i++) {
        const ni = nodes[i]!;
        const dists = nodes
          .map((n, j) => ({ j, d: Math.hypot(n.x - ni.x, n.y - ni.y) }))
          .filter((e) => e.j !== i && e.d < maxDist)
          .sort((a, b) => a.d - b.d)
          .slice(0, 2);
        for (const e of dists) {
          if (paths.some((p) => (p.a === i && p.b === e.j) || (p.a === e.j && p.b === i))) continue;
          paths.push({ a: i, b: e.j, ai: ni.ai || nodes[e.j]!.ai });
        }
      }

      packets = [];
      if (!reduced && paths.length) {
        const pc = isMobile ? 6 : isTablet ? 10 : 16;
        for (let i = 0; i < pc; i++) {
          packets.push({
            path: Math.floor(Math.random() * paths.length),
            t: Math.random(),
            speed: 0.00006 + Math.random() * 0.00008,
          });
        }
      }
    };

    // orthogonal-ish circuit route between two nodes
    const routePoint = (p: Path, t: number) => {
      const a = nodes[p.a]!;
      const b = nodes[p.b]!;
      const midX = a.x + (b.x - a.x) * 0.55;
      if (t < 0.55) {
        const k = t / 0.55;
        return { x: a.x + (midX - a.x) * k, y: a.y };
      }
      const k = (t - 0.55) / 0.45;
      return { x: midX + (b.x - midX) * k, y: a.y + (b.y - a.y) * k };
    };

    const drawGrid = () => {
      const step = width < 640 ? 46 : 64;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(245, 247, 250, 0.025)";
      ctx.beginPath();
      for (let x = step / 2; x < width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = step / 2; y < height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const drawPaths = (time: number) => {
      for (const p of paths) {
        const a = nodes[p.a]!;
        const b = nodes[p.b]!;
        const mid = routePoint(p, 0.55);
        const boost = Math.max(a.glow, b.glow);
        const base = p.ai ? 0.05 : 0.07;
        const color = p.ai ? CYAN : GOLD;
        ctx.strokeStyle = `rgba(${color}, ${base + boost * 0.1})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mid.x, mid.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      void time;
    };

    const drawNodes = (time: number) => {
      for (const n of nodes) {
        const pulse = reduced ? 0.5 : 0.5 + 0.5 * Math.sin(time * 0.0009 + n.phase);
        const color = n.ai ? CYAN : GOLD;
        const alpha = 0.14 + pulse * 0.16 + n.glow * 0.4;
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + n.glow * 1.2, 0, Math.PI * 2);
        ctx.fill();

        if (n.glow > 0.02) {
          const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 14 + n.glow * 10);
          g.addColorStop(0, `rgba(${color}, ${0.16 * n.glow})`);
          g.addColorStop(1, `rgba(${color}, 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 14 + n.glow * 10, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(245, 247, 250, ${0.05 + pulse * 0.06})`;
        ctx.beginPath();
        ctx.arc(n.x - n.r * 0.3, n.y - n.r * 0.3, 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawPackets = (dt: number) => {
      for (const pk of packets) {
        pk.t += pk.speed * dt;
        if (pk.t > 1) {
          pk.t = 0;
          pk.path = Math.floor(Math.random() * paths.length);
        }
        const p = paths[pk.path];
        if (!p) continue;
        const pt = routePoint(p, pk.t);
        const color = p.ai ? CYAN : GOLD;
        const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 7);
        g.addColorStop(0, `rgba(${color}, 0.4)`);
        g.addColorStop(1, `rgba(${color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${color}, 0.65)`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCursor = () => {
      if (!mouse.active) return;
      const radius = 200;
      const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, radius);
      g.addColorStop(0, `rgba(${GOLD}, 0.05)`);
      g.addColorStop(0.6, `rgba(${GOLD}, 0.015)`);
      g.addColorStop(1, `rgba(${GOLD}, 0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    let last = performance.now();
    const frame = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      const time = now - start;

      ctx.clearRect(0, 0, width, height);

      if (mouse.active) {
        mouse.x += (mouse.tx - mouse.x) * 0.06;
        mouse.y += (mouse.ty - mouse.y) * 0.06;
      }

      for (const n of nodes) {
        const target =
          mouse.active && Math.hypot(n.x - mouse.x, n.y - mouse.y) < 200
            ? 1 - Math.hypot(n.x - mouse.x, n.y - mouse.y) / 200
            : 0;
        n.glow += (target - n.glow) * 0.08;
      }

      drawCursor();
      drawGrid();
      drawPaths(time);
      if (!reduced) drawPackets(dt);
      drawNodes(time);

      raf = requestAnimationFrame(frame);
    };

    const renderStatic = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      drawPaths(0);
      drawNodes(0);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      if (!mouse.active) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
      mouse.tx = -9999;
      mouse.ty = -9999;
    };

    const parent = canvas.parentElement;
    const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    build();
    if (reduced) {
      renderStatic();
    } else {
      start = performance.now();
      last = start;
      raf = requestAnimationFrame(frame);
      if (desktopPointer && parent) {
        parent.addEventListener("pointermove", onPointerMove);
        parent.addEventListener("pointerleave", onPointerLeave);
      }
    }

    const onResize = () => {
      build();
      if (reduced) renderStatic();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (parent) {
        parent.removeEventListener("pointermove", onPointerMove);
        parent.removeEventListener("pointerleave", onPointerLeave);
      }
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 32% 45%, var(--background) 0%, color-mix(in oklab, var(--background) 72%, transparent) 45%, transparent 78%)",
        }}
      />
    </div>
  );
}
