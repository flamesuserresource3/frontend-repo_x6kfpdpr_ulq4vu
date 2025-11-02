import React from 'react';
import { ShieldCheck, LineChart, Users, MessageSquare, Bot } from 'lucide-react';

const agents = [
  { name: 'Competitor', Icon: ShieldCheck, score: 78, note: 'Crowded, but niche angle viable' },
  { name: 'Market', Icon: LineChart, score: 84, note: 'Growing solopreneur segment' },
  { name: 'Audience Sentiment', Icon: MessageSquare, score: 72, note: 'Strong pain across forums' },
  { name: 'User Fit', Icon: Users, score: 80, note: 'Clear ICP with willingness to pay' },
  { name: 'Feasibility', Icon: Bot, score: 88, note: 'Buildable in 6–8 weeks MVP' },
];

export default function ValidatorPanel() {
  const overall = Math.round(agents.reduce((a, b) => a + b.score, 0) / agents.length);

  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-200">Validator Panel</h3>
        <span className="text-xs text-slate-400">Overall</span>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="relative h-12 w-12">
          <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
            <path
              className="text-slate-800"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32z"
            />
            <path
              className="text-indigo-500"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={`${overall}, 100`}
              d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32z"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
            {overall}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Validation Score</p>
          <p className="text-xs text-slate-400">Based on 5-agent analysis</p>
        </div>
      </div>

      <ul className="space-y-3">
        {agents.map(({ name, Icon, score, note }) => (
          <li key={name} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-indigo-400" />
                <span className="text-sm text-slate-200">{name}</span>
              </div>
              <span className="text-xs font-medium text-white">{score}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded bg-slate-800">
              <div
                className="h-full bg-indigo-500"
                style={{ width: `${score}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-400">{note}</p>
          </li>
        ))}
      </ul>

      <button className="mt-4 rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-emerald-950 hover:bg-emerald-400">
        Approve & Create Project
      </button>
    </div>
  );
}
