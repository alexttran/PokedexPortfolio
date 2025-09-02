'use client';

export default function TrainerCard() {
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <div className="card p-6 flex items-center justify-center bg-gradient-to-br from-poke-50 to-white dark:from-zinc-800 dark:to-zinc-900">
          <img src='profile.png' alt="Trainer Avatar" style={{ objectFit: 'cover' }} className="w-48 h-48 object-cover rounded-2xl border-4 border-black/20 dark:border-white/10" />
        </div>
        <div className="md:col-span-2 card p-6">
          <h2 className="text-4xl font-bold tracking-wide text-poke-700">Trainer Profile</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="badge">Trainer ID: <span className="font-bold">#012345</span></div>
            <div className="badge">Hometown: <span className="font-bold">Pallet Town (Portland, OR)</span></div>
            <div className="badge">Badges: <span className="font-bold">Full‑Stack, Data, DevOps</span></div>
            <div className="badge">Current Party: <span className="font-bold">Next.js · Node · Postgres · Tailwind</span></div>
          </div>
          <p className="mt-6 text-xl leading-7">
            I'm Alex Tran, a software engineer who loves to push the boundaries of my technical ability. 
            As a student always dedicated to learning, I approach every new opportunity with curiosity and passion. 
            I love working with others to accomplish a shared goal.
          </p>
          <a href="#pokedex" className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-poke-600 text-white rounded-xl px-btn px-border">View Pokédex ↓</a>
        </div>
      </div>
    </section>
  );
}