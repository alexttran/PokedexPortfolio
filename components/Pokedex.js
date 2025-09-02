'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import projects from '@/data/projects';


function useBleep() {
  const ctxRef = useRef(null);
  const lastRef = useRef(0);
  useEffect(() => () => ctxRef.current?.close(), []);
  return () => {
    const now = Date.now();
    if (now - lastRef.current < 100) return; // rate-limit
    lastRef.current = now;
    const ctx = ctxRef.current || new window.AudioContext();
    ctxRef.current = ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'square';
    o.frequency.value = 700; // DS‑ish blip
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.13);
  };
}


export default function Pokedex() {
  const [index, setIndex] = useState(0);
  const bleep = useBleep();


  const sorted = useMemo(() => [...projects].sort((a,b) => a.id - b.id), []);
  const current = sorted[index];


  const goto = (i) => {
    const next = (i + sorted.length) % sorted.length;
    setIndex(next);
    bleep();
  };


  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown') goto(index + 1);
      if (e.key === 'ArrowUp') goto(index - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);


  return (
  <section id="pokedex" className="section">
    <h2 className="text-4xl font-bold tracking-wide text-poke-700 mb-6">Project Pokédex</h2>
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
      {/* Main viewer */}
      <div className="card p-6 bg-gradient-to-br from-white to-poke-50/60 dark:from-zinc-900 dark:to-zinc-800">
        <div className="grid md:grid-cols-5 gap-4">
          {/* Sprite */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="aspect-square w-full max-w-xs bg-white dark:bg-zinc-800 rounded-2xl border border-black/10 dark:border-white/10 px-border flex items-center justify-center">
              <img src={current?.image || '/projects/placeholder.png'} alt="Project preview" className="max-w-[85%] max-h-[85%] object-contain" />
            </div>
          </div>

          {/* Entry */}
          <div className="md:col-span-3">

            <div className="flex items-center gap-3">
              <span className="text-2xl">No.{String(current.id).padStart(3, '0')}</span>
              <h3 className="text-3xl font-bold">{current.name}</h3>
              <span className="ml-auto badge">{current.year}</span>
            </div>

            <p className="mt-4 text-xl leading-7 min-h-[6rem]">{current.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              Type: 
              {current.types.map((t) => (
                <span key={t} className="badge bg-white/70 dark:bg-zinc-700">{t}</span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a href={current.location} target="_blank" rel="noreferrer" className="px-4 py-2 bg-poke-600 text-white rounded-xl px-btn px-border">Location: Click Here ↗</a>
              <button className="px-3 py-2 rounded-xl border bg-white dark:bg-zinc-700 px-border" onClick={() => navigator.clipboard.writeText(current.location)}>Copy Link</button>
            </div>
          </div>
        </div>
      </div>


      {/* Index list */}
      <div className="card p-4 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-2xl">Index</h4>
          <div className="flex flex-col gap-2 ml-auto">
            <button
              aria-label="Prev"
              onClick={() => goto(index - 1)}
              className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 px-border"
            >
              ↑
            </button>
            <button
              aria-label="Next"
              onClick={() => goto(index + 1)}
              className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-700 px-border"
            >
              ↓
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto pr-2">
          {sorted.map((p, i) => (
            <button
              key={p.id}
              onClick={() => { setIndex(i); bleep(); }}
              className={`w-full text-left rounded-lg px-3 py-2 mb-2 border px-border ${
                i === index
                  ? 'bg-poke-100 border-poke-600 text-black'
                  : 'bg-white/70 dark:bg-zinc-700/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm opacity-70">
                  No.{String(p.id).padStart(3, '0')}
                </span>
                <span className="font-bold">{p.name}</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {p.types.map((t) => (
                  <span key={t} className="badge text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}