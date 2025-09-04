'use client';
import { useState } from 'react';

const SKILLS = {
  languages: ['Java', 'Python', 'JavaScript', 'HTML/CSS', 'SQL'],
  devtools: ['Git', 'Vercel', 'Supabase', 'VSCode', 'IntelliJ IDEA'],
  libraries: ['React', 'React Native', 'Pytorch', 'Node.js', 'Tailwind'],
};

export default function TrainerCard() {
  const [avatarSrc, setAvatarSrc] = useState('../profile.png');
  const [flipped, setFlipped] = useState(false);
  const [category, setCategory] = useState('languages');

  return (
    <section id="about" className="section">
      {/* Top-right title to mirror Pokédex title position */}
      <h2 className= "text-4xl font-bold tracking-wide text-poke-700 mb-6">
        Trainer Profile
      </h2>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {/* Avatar / left card */}
        <div className="card p-6 flex items-center justify-center bg-gradient-to-br from-poke-50 to-white dark:from-zinc-800 dark:to-zinc-900">
          <img
            src={avatarSrc}
            alt="Trainer Avatar"
            onError={() => setAvatarSrc('/projects/placeholder.png')}
            className="w-48 h-48 object-cover rounded-2xl border-4 border-black/20 dark:border-white/10"
          />
        </div>

        {/* Right card with flip */}
        <div className={`md:col-span-2 card p-0 flip ${flipped ? 'flipped' : ''}`}>
          <div className="flip-inner">
            {/* FRONT */}
            <div className="flip-face p-6">
              <div className="flex items-center gap-3">
                <div className="badge">
                  Trainer ID: <span className="font-bold">#252525</span>
                </div>
                <div className="badge">
                  Hometown: <span className="font-bold">Rose City (Portland, OR)</span>
                </div>
                <button
                  onClick={() => setFlipped(true)}
                  className="ml-auto px-4 py-2 bg-poke-600 text-white rounded-xl px-btn px-border"
                  aria-label="Show badges"
                >
                  Badges ▸
                </button>
              </div>

              <div className="mt-4 badge">
                Current Party: <span className="font-bold">Python · Java · JavaScript · HTML/CSS</span>
              </div>

              <p className="mt-6 text-xl leading-7">
                I&apos;m Alex Tran, a software engineer who loves to push the boundaries of my technical ability. 
                As a student always dedicated to learning, I approach every new opportunity with curiosity and passion. 
                I love working with others to accomplish a shared goal.
              </p>

              <a
                href="#pokedex"
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-poke-600 text-white rounded-xl px-btn px-border"
              >
                View Pokédex ↓
              </a>
            </div>

            {/* BACK */}
            <div className="flip-face flip-back p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold">Badges</span>
                <div className="ml-auto flex gap-2">
                  <button
                    onClick={() => setFlipped(false)}
                    className="px-3 py-2 rounded-xl border bg-white dark:bg-zinc-700 px-border"
                  >
                    ◂ Back
                  </button>
                </div>
              </div>

              {/* Category buttons */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['languages', 'devtools', 'libraries'].map((k) => (
                  <button
                    key={k}
                    onClick={() => setCategory(k)}
                    className={`badge capitalize ${
                      category === k ? 'bg-poke-100 border-poke-600 text-black' : 'bg-white/70 dark:bg-zinc-700'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>

              {/* Skills grid */}
              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {SKILLS[category].map((s) => (
                  <div key={s} className="badge bg-white/80 dark:bg-zinc-700/80">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}