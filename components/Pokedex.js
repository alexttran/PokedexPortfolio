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
}