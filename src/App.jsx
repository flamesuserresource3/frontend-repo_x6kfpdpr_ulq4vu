import React from 'react';
import HeroCover from './components/HeroCover';
import SignalFeed from './components/SignalFeed';
import IdeaWorkbench from './components/IdeaWorkbench';
import ValidatorPanel from './components/ValidatorPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
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
            <a href="#" className="text-sm text-slate-300 hover:text-white">Command Center</a>
            <a href="#" className="text-sm text-slate-300 hover:text-white">Projects</a>
            <a href="#" className="text-sm text-slate-300 hover:text-white">Docs</a>
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
      </div>

      <footer className="mt-10 border-t border-slate-800/60 py-6 text-center text-xs text-slate-400">
        Built with ❤️ for founders. Spline cover by Flames.Blue.
      </footer>
    </div>
  );
}
