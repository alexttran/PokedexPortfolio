// Edit this array to add your projects. Images should be in /public/projects/ or remote URLs.
const projects = [
  {
    id: 1,
    name: 'Pikadata ETL',
    description: 'A playful ETL pipeline that evolves raw CSVs into clean datasets. Features batching, schema validation, and a data "battle" QA mode.',
    image: '/projects/pikadata.png',
    location: 'https://github.com/you/pikadata',
    types: ['Node.js', 'PostgreSQL', 'Airflow'],
    year: 2024
  },
  {
    id: 2,
    name: 'Charizard Charts',
    description: 'A blazing‑fast charting micro‑lib with tiny bundle size and zero deps. Ships with adapters for React and vanilla.',
    image: '/projects/charizard-charts.png',
    location: 'https://github.com/you/charizard-charts',
    types: ['React', 'D3', 'Vite'],
    year: 2024
  },
  {
    id: 3,
    name: 'Squirtle Speech',
    description: 'Web speech coach that records, scores clarity, and suggests drills. Poké‑clean UI and privacy‑first.',
    image: '/projects/squirtle-speech.png',
    location: 'https://yourdomain.com/squirtle-speech',
    types: ['Next.js', 'WebAudio', 'OpenAI'],
    year: 2025
  }
];

export default projects;