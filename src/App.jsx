import React from 'react';
import HeroCover from './components/HeroCover';
import SignalFeed from './components/SignalFeed';
import IdeaWorkbench from './components/IdeaWorkbench';
import ValidatorPanel from './components/ValidatorPanel';
import { Home, FolderKanban, BookOpen } from 'lucide-react';

export default function App() {
  const projects = [
    { id: 'p1', name: 'InvoicePilot', status: 'MVP', metric: '72% validation', color: 'from-emerald-400 to-teal-500' },
    { id: 'p2', name: 'PromptHub', status: 'Discovery', metric: '48 signals', color: 'from-indigo-400 to-fuchsia-500' },
    { id: 'p3', name: 'FigmaFlow', status: 'Prototype', metric: 'Waitlist 312', color: 'from-amber-400 to-rose-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <a id="top" />
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-semibold text-white">
              FO
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">FounderOS</h2>
              <p className="text-xs text-slate-400">Idea → Project, faster.</p>
            </div>
          </div>

          <nav className="hidden items-center gap-4 sm:flex">
            <a href="#top" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <Home className="h-4 w-4" />
              Command Center
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <FolderKanban className="h-4 w-4" />
              Projects
            </a>
            <a href="#docs" className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <BookOpen className="h-4 w-4" />
              Docs
            </a>
          </nav>
        </header>

        <HeroCover />

        <main className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <SignalFeed />
          </div>
          <div className="md:col-span-1">
            <IdeaWorkbench />
          </div>
          <div className="md:col-span-1">
            <ValidatorPanel />
          </div>
        </main>

        {/* Projects section anchor to enable the header link */}
        <section id="projects" className="mt-12">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-white">Projects</h2>
              <p className="text-sm text-slate-400">Ideas you approved and spun up.</p>
            </div>
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500/90">New Project</button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((p) => (
              <div key={p.id} className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
                <div className={`h-20 w-full bg-gradient-to-r ${p.color}`} />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">{p.name}</h3>
                    <span className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{p.metric}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="rounded-md border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-200 hover:border-indigo-500/40">Open</button>
                    <button className="rounded-md border border-slate-800 bg-slate-950 px-2 py-1 text-xs text-slate-200 hover:border-indigo-500/40">Share</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="docs" className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-white">Docs</h2>
          <p className="mt-2 text-sm text-slate-400">Coming soon.</p>
        </section>
      </div>

      <footer className="mt-10 border-t border-slate-800/60 py-6 text-center text-xs text-slate-400">
        Built with ❤️ for founders. Spline cover by Flames.Blue.
      </footer>
    </div>
  );
}
