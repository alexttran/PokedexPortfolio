'use client';
import { useState } from 'react';


export default function ContactForm() {
  const [state, setState] = useState({ name: '', email: '', message: '', phone: '' });
  const [sent, setSent] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback (no backend). Replace with your form service if desired.
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Name: ${state.name}\nEmail: ${state.email}\nPhone: ${state.phone}\n\n${state.message}`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };


  return (
    <section id="contact" className="section">
      <div className="card p-6">
        <h2 className="text-4xl font-bold tracking-wide text-poke-700">Contact</h2>
        <p className="mt-2">Email, LinkedIn, GitHub, or the form below.</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a className="badge linkish" href="mailto:attran6@wisc.edu">✉︎ attran6@wisc.edu</a>
          <a className="badge linkish" href="https://www.linkedin.com/in/alex-t-tran" target="_blank">in/alex-t-tran</a>
          <a className="badge linkish" href="https://github.com/alexttran" target="_blank">github.com/alexttran</a>
          <button className="badge" onClick={() => navigator.clipboard.writeText('+1 (503) 330‑2871')}>📞 503-330-2871</button>
        </div>


        <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
          <input required placeholder="Name" className="rounded-xl px-4 py-3 border px-border bg-white dark:bg-zinc-800" value={state.name} onChange={e=>setState(s=>({...s,name:e.target.value}))} />
          <input required type="email" placeholder="Email" className="rounded-xl px-4 py-3 border px-border bg-white dark:bg-zinc-800" value={state.email} onChange={e=>setState(s=>({...s,email:e.target.value}))} />
          <input placeholder="Phone" className="rounded-xl px-4 py-3 border px-border bg-white dark:bg-zinc-800" value={state.phone} onChange={e=>setState(s=>({...s,phone:e.target.value}))} />
          <div className="sm:col-span-2">
            <textarea required placeholder="Your message" rows={6} className="w-full rounded-xl px-4 py-3 border px-border bg-white dark:bg-zinc-800" value={state.message} onChange={e=>setState(s=>({...s,message:e.target.value}))}></textarea>
          </div>
          <div className="sm:col-span-2 flex items-center gap-3">
            <button type="submit" className="px-5 py-3 bg-poke-600 text-white rounded-xl px-btn px-border">Send</button>
            {sent && <span className="text-sm opacity-70">Opened your mail app—send from there!</span>}
          </div>
        </form>
      </div>
    </section>
  );
}