import React from 'react';
import { Globe, Flame, Search } from 'lucide-react';

const mockSignals = [
  {
    id: '1',
    source: 'Reddit',
    title: 'Freelancers struggle managing multi-client invoices',
    votes: 128,
  },
  {
    id: '2',
    source: 'Hacker News',
    title: 'Teams want better visibility into AI prompts across orgs',
    votes: 89,
  },
  {
    id: '3',
    source: 'Product Hunt',
    title: 'Designers need faster handoff from Figma to production',
    votes: 64,
  },
];

export default function SignalFeed() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-indigo-400" />
          <h3 className="text-sm font-medium text-slate-200">Signal Feed</h3>
        </div>
        <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Live</span>
      </div>

      <div className="mb-4 flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search problems…"
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
      </div>

      <ul className="space-y-3 overflow-auto">
        {mockSignals.map((s) => (
          <li key={s.id} className="group rounded-lg border border-slate-800 bg-slate-950/60 p-3 hover:border-indigo-500/40">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-200">{s.title}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded-md bg-slate-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-300">
                    {s.source}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <Flame className="h-4 w-4" />
                <span className="text-xs font-semibold">{s.votes}</span>
              </div>
            </div>
            <button className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600/90 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-600">
              Promote to Workbench
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
